Cypress.Commands.add('VisitaVerifica', function() {
    cy.visit('https://gustavode.github.io/Dev_finance/#');
    cy.title().should('be.equal','DevFinace$');

})

Cypress.Commands.add('ClickNovaTransação', function() {
    cy.get('#transaction > .button')
    .click();
})
