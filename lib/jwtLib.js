const validate = require( '@chatpta/validate' ).validate;
const { jwtUtilAuth } = require( '@chatpta/auth-util' );
const {
    throwLoginRequiredError,
    throwNotAuthorizedError
} = require( "@chatpta/common-util" ).error;

function jwtClientId( req ) {

    return req?.jwt?.payload?.client_id;

}

function doesJwtUserHasRole( req, userRole ) {

    if ( userRole && typeof userRole === "string" ) {
        return req?.jwt?.payload?.roles?.includes( userRole );
    } else {
        throwNotAuthorizedError();
    }
}

function throwError( customErrorFunction ) {
    ( typeof customErrorFunction === "function" ) ?
        customErrorFunction() :
        throwLoginRequiredError()
}

function isJwtExpired( req, jwtValiditySeconds ) {

    if ( jwtValiditySeconds && typeof jwtValiditySeconds === "number" ) {
        return ( parseInt( jwtValiditySeconds ) * 1000 ) < jwtAgeInMilliseconds( req );
    } else {
        return true;
    }

}

function jwtAgeInMilliseconds( req ) {

    if ( req?.jwt?.payload?.iat ) {

        req.jwt[ "age" ] = Date.now() - req.jwt.payload.iat;
        return req.jwt.age;

    } else {

        req.jwt[ "age" ] = Infinity
        return req.jwt.age;

    }
}

async function validateAndExtractJwtObject( req, publicKey, customErrorFunction ) {

    const jwtString = await _validateJwt( req, customErrorFunction );

    const isJwtSignatureValid = await _isJwtSignatureValid( jwtString, publicKey, customErrorFunction );

    if ( jwtString && isJwtSignatureValid ) {
        await _extractJwtObject( req, jwtString, customErrorFunction );
    }

    return req;
}

function verifyJwtAndRole( role, publicKey, customErrorFunction ) {
    return async function ( req, res, next ) {
        await validateAndExtractJwtObject( req, publicKey, customErrorFunction )
            .then( req => doesJwtUserHasRole( req, role ) )
            .then( isRoleExist => _isLoginRequired( isRoleExist, customErrorFunction ) )
            .then( next )
            .catch( next );
    }
}

function verifyJwt( publicKey, customErrorFunction ) {
    return async function ( req, res, next ) {
        await validateAndExtractJwtObject( req, publicKey, customErrorFunction )
            .then( next )
            .catch( next );
    }
}

function throwUsedTokenError() {
    throw new Error( "Used_Token" );
}

/*********************
 * Private functions *
 *********************/
function _isLoginRequired( hasRequiredRole, customErrorFunction ) {

    if ( !hasRequiredRole ) {
        throwError( customErrorFunction );
    }

}

async function _extractJwtObject( req, jwt, customErrorFunction ) {
    if ( jwt && typeof jwt === "string" ) {
        req[ "jwt" ] = jwtUtilAuth.getHeaderPayloadFromJwt( jwt );
    } else {
        throwError( customErrorFunction );
    }
}

async function _isJwtSignatureValid( jwt, publicKey, customErrorFunction ) {

    if ( jwt && typeof jwt === "string" ) {
        return jwtUtilAuth.verifyJwtSignature( jwt, publicKey )
    } else {
        throwError( customErrorFunction );
    }
}

async function _validateJwt( req, customErrorFunction ) {

    // Get from http header.
    let jwtRaw = req.get( "Authorization" );

    // Extract jwt from bearer schema.
    let jwt = _extractJwt( jwtRaw, customErrorFunction );

    // Validate characters string of jwt.
    if ( validate.isJwtString( jwt ) ) {
        return jwt;
    } else {
        throwError( customErrorFunction );
    }
}

function _extractJwt( jwtRaw, customErrorFunction ) {
    let jwtSplit = null;

    if ( jwtRaw && typeof jwtRaw === "string" ) {
        jwtSplit = jwtRaw.split( " " );
    } else {
        throwError( customErrorFunction );
    }

    if ( jwtSplit[ 0 ]?.toLowerCase() === "bearer" ) {
        return jwtSplit[ 1 ];
    } else {
        throwError( customErrorFunction );
    }

    return null;
}

module.exports = {
    _validateJwt,
    _isJwtSignatureValid,
    _extractJwtObject,
    validateAndExtractJwtObject,
    jwtAgeInMilliseconds,
    isJwtExpired,
    doesJwtUserHasRole,
    jwtClientId,
    verifyJwtAndRole,
    verifyJwt,
    throwUsedTokenError,
    throwError
}
