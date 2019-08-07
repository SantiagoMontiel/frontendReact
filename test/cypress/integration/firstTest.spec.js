'use strict'

describe('Pruebas funcionales',() => {

    /* eslint-disable */
    before(() => {
        cy.log('Comienzo la suite de test');
    });

    it('Se debe mostrar la pantalla de home', ()=>{
        cy.visit('');
        cy.screenshot();
    });

});