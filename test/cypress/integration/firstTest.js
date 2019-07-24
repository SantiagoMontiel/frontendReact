describe('Prueba Onboarding Principal',() => {

    /* eslint-disable */
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
    })

});