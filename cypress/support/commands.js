Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() { 
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Lisboa')
    cy.get('#email').type('silvalisboa@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('fillMandatoryFields', function() {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Lisboa')
    cy.get('#email').type('silvalisboa@gmail.com')
    cy.get('#open-text-area').type('Teste')
})

Cypress.Commands.add('succesMessage', function() {
    cy.get('.success').should('be.visible')
})

Cypress.Commands.add('errorMessage', function() {
    cy.get('.error').should('be.visible')
})

Cypress.Commands.add('VisitaAndShoultTitle', function() {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');

})
