module.exports = {
    getJwtAdminRoleCode,
    getJwtSellerRoleCode,
    getJwtEditorRoleCode,
    getNameOfRoleFromCode,
    getCategoryEditorRoleCode,
    getPhysicianRoleCode,
    getEDAdminRoleCode
}

function getJwtAdminRoleCode() {
    return "ad";
}

function getJwtSellerRoleCode() {
    return "se";
}

function getJwtEditorRoleCode() {
    return "ie";
}

function getCategoryEditorRoleCode() {
    return "ce";
}

function getPhysicianRoleCode() {
    return "ph";
}

function getEDAdminRoleCode() {
    return "ea";
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
        case "ph":
            return "physician";
        case "ea":
            return "ed admin";
        default:
            return "user";
    }
}
