describe('Dev Finance', function() {
    beforeEach(() => {
        cy.VisitaVerifica()
        cy.ClickNovaTransação()
    })

/*Dado que eu esteja em Nova Transação
Quando eu digito os campos: Descrição, Valor, Data com dados válidos
E clico no botão Salvar
Então o sistema exibe uma mensagem de sucesso "Transação Cadastrada com sucesso"*/
  it('Cadastra uma nova transação com dados válidos', function() {
    cy.get('#description')
    .type('Transação1')
    .should('have.value','Transação1')

    cy.get('#amount')
    .type('2')
    .should('have.value','2')

    cy.contains('Salvar')
    .click()
  })
})