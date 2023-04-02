const { describe, it } = require( "mocha" );
const assert = require( "assert" );
const jwtRoles = require( '../lib/jwtRoles' );

describe( "Lib jwt Roles", function () {

    it( "jwtAdminRoleCode", function () {

        // Act
        const receivedCode = jwtRoles.getJwtAdminRoleCode();
        const receivedName = jwtRoles.getNameOfRoleFromCode( receivedCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "ad" );
        assert.deepStrictEqual( receivedName, "admin" );
    } );

    it( "jwtSellerRoleCode", function () {

        // Act
        const receivedCode = jwtRoles.getJwtSellerRoleCode();
        const receivedName = jwtRoles.getNameOfRoleFromCode( receivedCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "se" );
        assert.deepStrictEqual( receivedName, "seller" );
    } );

    it( "jwtItemEditorRoleCode", function () {

        // Act
        const receivedCode = jwtRoles.getJwtEditorRoleCode();
        const receivedName = jwtRoles.getNameOfRoleFromCode( receivedCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "ie" );
        assert.deepStrictEqual( receivedName, "item editor" );
    } );

    it( "jwtCategoryEditorRoleCode", function () {

        // Act
        const receivedCode = jwtRoles.getCategoryEditorRoleCode();
        const receivedName = jwtRoles.getNameOfRoleFromCode( receivedCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "ce" );
        assert.deepStrictEqual( receivedName, "category editor" );
    } );

    it( "jwtPhysicianRoleCode", function () {

        // Act
        const receivedCode = jwtRoles.getPhysicianRoleCode();
        const receivedName = jwtRoles.getNameOfRoleFromCode( receivedCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "ph" );
        assert.deepStrictEqual( receivedName, "physician" );
    } );

    it( "jwtEDAdminRoleCode", function () {

        // Act
        const receivedCode = jwtRoles.getEDAdminRoleCode();
        const receivedName = jwtRoles.getNameOfRoleFromCode( receivedCode );

        // Assert
        assert.deepStrictEqual( receivedCode, "ea" );
        assert.deepStrictEqual( receivedName, "ed admin" );
    } );

    it( "jwtDefaultRole", function () {

        // Act
        const receivedName = jwtRoles.getNameOfRoleFromCode( );

        // Assert
        assert.deepStrictEqual( receivedName, "user" );
    } );
} );
