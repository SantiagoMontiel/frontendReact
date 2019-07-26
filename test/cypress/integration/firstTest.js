describe('Pruebas funcionales',() => {

    /* eslint-disable */
    before(() => {
        cy.log('Comienzo la suite de test');
    });

    it('Se debe mostrar la pantalla de home', ()=>{
        cy.visit('')
    });

    it('Hacer click sobre el boton Start',()=>{
        cy.contains('Start').click()
    });

    it('Agregar un nuevo badge',()=>{
        cy.visit('/badges/new');
        cy.get(':nth-child(1) > .form-control').type('Lionel');
        cy.get(':nth-child(2) > .form-control').type('Messi');
        cy.get(':nth-child(3) > .form-control').type('lio@gmail.com');
        cy.get(':nth-child(4) > .form-control').type('El mejor futbolista ever');
        cy.get(':nth-child(5) > .form-control').type('LionelMessiOk');
        cy.contains('Save').click();
        cy.wait(3000);
        cy.contains('Lionel Messi').should('exist');
    });

    it('Eliminar un badge',()=>{
        cy.visit('/badges');
        cy.contains('Lionel Messi').should('exist');
        cy.get(':nth-child(53) > .text-reset > .BadgesListItem').click();
        cy.get(':nth-child(3) > .btn').click();
        cy.get('.DeleteBadgeModal > div > .btn-danger').click();
        cy.wait(3000);
        cy.contains('Lionel Messi').should('not.exist');
    })

    after(() =>{
        cy.log('test finalizados');
    })

});