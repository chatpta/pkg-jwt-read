const { describe, it } = require( "mocha" );
const assert = require( "assert" );
const jwtRoles = require( '../lib/jwtRoles' );

describe( "Lib jwt Roles", function () {


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
} );
