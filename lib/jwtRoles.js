module.exports = {
    getJwtAdminRoleCode,
    getJwtSellerRoleCode,
    getJwtEditorRoleCode,
    getNameOfRoleFromCode,
    getCategoryEditorRoleCode
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

function getCategoryEditorRoleCode() {
    return "ce";
}

function getNameOfRoleFromCode( roleCode ) {
    switch ( roleCode ) {
        case "ad":
            return "admin";
        case "se":
            return "seller";
        case "ie":
            return "item editor";
        case "ce":
            return "category editor";
        default:
            return "user";
    }
}
