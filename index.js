const jwtLib = require( './lib/jwtLib' )


module.exports = {
    jwtClientId: jwtLib.jwtClientId,
    isJwtExpired: jwtLib.isJwtExpired,
    verifyJwtAndRole: jwtLib.verifyJwtAndRole,
    throwUsedTokenError: jwtLib.throwUsedTokenError,
    doesJwtUserHasRole: jwtLib.doesJwtUserHasRole,
    validateAndExtractJwtObject: jwtLib.validateAndExtractJwtObject,
};

