module.exports = {
    getJwtAdminRoleCode,
    getJwtSellerRoleCode,
    getJwtEditorRoleCode,
    getNameOfRoleFromCode
}

function getJwtSellerRoleCode() {
    return "se";
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
        case "se":
            return "seller";
        case "ie":
            return "item editor";
        default:
            return "user";
    }
}
