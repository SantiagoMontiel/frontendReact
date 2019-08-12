const addContext = require('mochawesome/addContext');

describe('Pruebas funcionales',() => {

    /* eslint-disable */
    before(() => {
        cy.log('Comienzo la suite de test');
    });

    it('Se debe mostrar la pantalla de home', ()=>{
        cy.visit('');
        cy.screenshot();
        addTestContext('Image', 'http://i.imgur.com/c4jt321.png');
    });

});

function addTestContext(title, value) {
    cy.once('test:after:run', test => addContext({ test }, { title, value }));
}