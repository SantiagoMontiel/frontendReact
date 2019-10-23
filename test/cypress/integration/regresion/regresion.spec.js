'use strict'

describe('Pruebas de Regresion',() => {

    /* eslint-disable */
    before(() => {
        cy.log('Comienzo la suite de regresion');

    });

    beforeEach( () => {
        cy.fixture('dataBadges.json').as('dataBadges');
    });

    it('Se debe mostrar la pantalla Bienvenida con todos sus elementos', ()=>{
        cy.visit('');
        cy.get('.Navbar__brand-logo').should("be.visible");
        cy.contains('.btn','Start').should("be.visible");
        cy.get('.col-12 > .img-fluid').should("be.visible");
        cy.get('.d-none > .img-fluid').should("be.visible");
        cy.get('h1').contains('Badge Management System').should("be.visible");
    });

    it('Funcionamiento del boton Start de la pantalla de Bienvenida',()=>{
        cy.visit('');
        cy.contains('Start').click();
        cy.contains('h1','Badge Management System').should("not.exist");
        cy.contains('.btn','New Badge').should("be.visible");
    });

    it('Pantalla de Bienvenida Look and Feel',()=>{
        cy.visit('/badges');
        cy.get('.Navbar__brand-logo').should("be.visible");
        cy.get('.Badges_conf-logo').should("be.visible");
        cy.contains('.btn','New Badge').should("be.visible");
        cy.get('.form-control').should("be.visible");
    });

    it('Agregar un nuevo badge exitoso',()=>{
        cy.get('@dataBadges').then((dataBadges) =>{
            cy.visit('/badges/new');
            cy.createBadge(dataBadges);
        });
    });

    it('Eliminar un badge exitosamente',()=>{
        cy.get('@dataBadges').then((dataBadges) =>{
            cy.visit('/badges');
            cy.contains(dataBadges.name + ' ' + dataBadges.lastName).should('exist');
            cy.get('ul.list-unstyled').children().last().click();
            cy.get(':nth-child(3) > .btn').click();
            cy.get('.DeleteBadgeModal > div > .btn-danger').click();
            cy.wait(3000);
            cy.contains('Lionel Messi').should('not.exist');
        });
    });

    after(() =>{
        cy.log('test finalizados');
    })

});