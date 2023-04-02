const jwtLib = require( './lib/jwtLib' );
const jwtRoles = require( './lib/jwtRoles' );


module.exports = {
    verifyJwt: jwtLib.verifyJwt,
    verifyJwtNoThrow: jwtLib.verifyJwtNoThrow,
    verifyVisitorNoThrow: jwtLib.verifyVisitorNoThrow,
    jwtClientId: jwtLib.jwtClientId,
    visitorClientId: jwtLib.visitorClientId,
    isJwtExpired: jwtLib.isJwtExpired,
    verifyJwtAndRole: jwtLib.verifyJwtAndRole,
    throwUsedTokenError: jwtLib.throwUsedTokenError,
    doesJwtUserHasRole: jwtLib.doesJwtUserHasRole,
    adminRole: jwtRoles.getJwtAdminRoleCode,
    sellerRole: jwtRoles.getJwtSellerRoleCode,
    itemEditorRole: jwtRoles.getJwtEditorRoleCode,
    categoryEditorRole: jwtRoles.getCategoryEditorRoleCode,
    physicianRole: jwtRoles.getPhysicianRoleCode,
    edAdminRole: jwtRoles.getEDAdminRoleCode,
    getNameOfRole: jwtRoles.getNameOfRoleFromCode
};

