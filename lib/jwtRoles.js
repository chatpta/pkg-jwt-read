module.exports = {
    getJwtEditorRoleCode,
    getNameOfRoleFromCode
}

function getJwtEditorRoleCode() {
    return "ie";
}

function getNameOfRoleFromCode( roleCode ) {
    switch ( roleCode ) {
        case "ie":
            return "item editor";
        default:
            return "user";
    }
}
