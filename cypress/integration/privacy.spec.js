describe('Política de Privacidade - Independente', function() {
    beforeEach(() => {
        cy.visit('./src/privacy.html')
    })
    it('acessa a página da política de privacidade', function() {
        cy.contains('CAC TAT - Política de privacidade')
            .should('be.visible')
        cy.url().should('include','/privacy')
    })
})
