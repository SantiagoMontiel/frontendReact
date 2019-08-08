'use strict'
const addContext = require('mochawesome/addContext');

describe('Pruebas funcionales',() => {

    /* eslint-disable */
    before(() => {
        cy.log('Comienzo la suite de test');
    });

    it('Se debe mostrar la pantalla de home', ()=>{
        var test=this;
        cy.visit('');
        cy.screenshot();
        addContext(test, 'http://i.imgur.com/c4jt321.png');
    });

});