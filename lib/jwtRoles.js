module.exports = {
    getJwtAdminRoleCode,
    getJwtEditorRoleCode,
    getNameOfRoleFromCode
}

function getJwtAdminRoleCode() {
    return "ad";
}

function getJwtEditorRoleCode() {
    return "ie";
}

function getNameOfRoleFromCode( roleCode ) {
    switch ( roleCode ) {
        case "ad":
            return "admin";
        case "ie":
            return "item editor";
        default:
            return "user";
    }
}
