const jwtLib = require( './lib/jwtLib' );
const jwtRoles = require( './lib/jwtRoles' );


module.exports = {
    jwtClientId: jwtLib.jwtClientId,
    isJwtExpired: jwtLib.isJwtExpired,
    verifyJwtAndRole: jwtLib.verifyJwtAndRole,
    throwUsedTokenError: jwtLib.throwUsedTokenError,
    doesJwtUserHasRole: jwtLib.doesJwtUserHasRole,
    itemEditorRole: jwtRoles.getJwtEditorRoleCode,
    getNameOfRole: jwtRoles.getNameOfRoleFromCode
};

