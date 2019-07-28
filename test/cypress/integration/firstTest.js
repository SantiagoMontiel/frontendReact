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
            cy.get(':nth-child(1) > .form-control').type(dataBadges.name);
            cy.get(':nth-child(2) > .form-control').type(dataBadges.lastName);
            cy.get(':nth-child(3) > .form-control').type(dataBadges.email);
            cy.get(':nth-child(4) > .form-control').type(dataBadges.job);
            cy.get(':nth-child(5) > .form-control').type(dataBadges.instagram);
            cy.contains('Save').click();
            cy.wait(3000);
            cy.contains('Lionel Messi').should('exist');
        });

    });

    it('Eliminar un badge',()=>{
        cy.get('@dataBadges').then((dataBadges) =>{
            cy.visit('/badges');
            cy.contains(dataBadges.name + ' ' + dataBadges.lastName).should('exist');
            cy.get(':nth-child(53) > .text-reset > .BadgesListItem').click();
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