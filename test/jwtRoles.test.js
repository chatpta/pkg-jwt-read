const { describe, it } = require( "mocha" );
const assert = require( "assert" );
const jwtRoles = require( '../lib/jwtRoles' );

describe( "Lib jwt Roles", function () {

    it( "getJwtSellerRoleCode", function () {

        const roleItemEditorCode = "se";

        // Act
        const receivedCode = jwtRoles.getJwtSellerRoleCode();

        // Assert
        assert.deepStrictEqual( receivedCode, roleItemEditorCode );
    } );

    it( "getNameOfSellerRoleFromCode", function () {

        const roleItemEditorCode = "se";

        // Act
        const receivedCode = jwtRoles.getNameOfRoleFromCode( roleItemEditorCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "seller" );
    } );

    it( "getJwtAdminRoleCode", function () {

        const roleItemEditorCode = "ad";

        // Act
        const receivedCode = jwtRoles.getJwtAdminRoleCode();

        // Assert
        assert.deepStrictEqual( receivedCode, roleItemEditorCode );
    } );

    it( "getNameOfAdminRoleFromCode", function () {

        const roleItemEditorCode = "ad";

        // Act
        const receivedCode = jwtRoles.getNameOfRoleFromCode( roleItemEditorCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "admin" );
    } );

    it( "getJwtEditorRoleCode", function () {

        const roleItemEditorCode = "ie";

        // Act
        const receivedCode = jwtRoles.getJwtEditorRoleCode();

        // Assert
        assert.deepStrictEqual( receivedCode, roleItemEditorCode );
    } );

    it( "getNameOfRoleFromCode", function () {

        const roleItemEditorCode = "ie";

        // Act
        const receivedCode = jwtRoles.getNameOfRoleFromCode( roleItemEditorCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "item editor" );
    } );

    it( "getCategoryEditorRoleCode", function () {

        const roleCategoryEditorCode = "ce";

        // Act
        const receivedCode = jwtRoles.getCategoryEditorRoleCode();

        // Assert
        assert.deepStrictEqual( receivedCode, roleCategoryEditorCode );
    } );

    it( "getNameOfRoleFromCode", function () {

        const roleItemEditorCode = "ce";

        // Act
        const receivedCode = jwtRoles.getNameOfRoleFromCode( roleItemEditorCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "category editor" );
    } );
} );
