'use strict'

describe('Pruebas funcionales',() => {

    /* eslint-disable */
    before(() => {
        cy.log('Comienzo la suite de test');
    });

    beforeEach( () => {
        cy.fixture('dataBadges.json').as('dataBadges');
    });

    it('Se debe mostrar la pantalla de home', ()=>{
        cy.visit('')
    });

    it('Hacer click sobre el boton Start',()=>{
        cy.contains('Start').click()
    });

    it('Agregar un nuevo badge',()=>{
        cy.get('@dataBadges').then((dataBadges) =>{
            cy.visit('/badges/new');
            cy.createBadge(dataBadges);
        });

    });

    it('Eliminar un badge',()=>{
        cy.get('@dataBadges').then((dataBadges) =>{
            cy.visit('/badges');
            cy.contains(dataBadges.name + ' ' + dataBadges.lastName).should('exist');
            cy.get(':nth-child(53) > .text-reset > .BadgesListItem').click();
            cy.get(':nth-child(3) > .btn').click();
            // cy.screenshot('delete-badge');
            cy.get('.DeleteBadgeModal > div > .btn-danger').click();
            cy.wait(3000);
            cy.contains('Lionel Messi').should('not.exist');
        });
    });

    after(() =>{
        cy.log('test finalizados');
    })

});