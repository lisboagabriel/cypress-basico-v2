/// <reference types="Cypress" />

//describe: define uma suíte de testes.
// o bloco 'it' define um caso de teste.

//cy.visit -> visita a url ou o local da aplicação
//cy.title -> consulta o titulo da aplicação
//.should -> afirma o titulo('eq -> igual', 'titulo esperado' )

/*
Este teste visita a aplicação web
Verifica o se o título da pagina é igual a "Central de Atendimento ao Cliente TAT"
*/

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.VisitaAndShoultTitle()
    })
    //before each executa um codigo antes de cada teste

    /*Dado que eu esteja no sistema
     Quando eu preencho os campos "Nome, Sobrenome, Email, Como podemos te ajudar?" com informações válidas
     E clico no botão "Enviar" 
     Então uma mensagem de sucesso deve ser exibida 
    */  
   it('preenche os campos obrigatórios e envia o formulário', function(){
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Lisboa')
    cy.get('#email').type('silvalisboa@gmail.com')

    //preenche o campo "como podemos te ajudar" com um texto grande imediato:
    const longText = 'Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura latina clássica de 45 aC, com mais de 2.000 anos. Richard McClintock, professor de latim no Hampden-Sydney College, na Virgínia, procurou uma das palavras latinas mais obscuras, consectetur, em uma passagem de Lorem Ipsum, e examinando as citações da palavra na literatura clássica, descobriu a fonte indubitável. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal) de Cícero, escrito em 45 AC. Este livro é um tratado sobre a teoria da ética, muito popular durante o Renascimento. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..", vem de uma linha na seção 1.10.32.'
    cy.get('#open-text-area').type(longText,{delay:0})

    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
   })

   it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){
    cy.get('#firstName').type('Gabriel',{delay:0})
    cy.get('#lastName').type('Lisboa',{delay:0})
    cy.get('#email').type('silvalisboa.gmail.com',{delay:0})
    cy.get('#open-text-area').type('teste com input e click',{delay:0})

    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
   })

   it('campo telefone continua vazio se não for inserido um valor numerico', function(){
    cy.get('#phone').type('onze nove quatro...').should('have.value','')
   })

   it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
    cy.get('#firstName').type('Gabriel',{delay:0})
    cy.get('#lastName').type('Lisboa',{delay:0})
    cy.get('#email').type('silvalisboa@gmail.com',{delay:0})

    cy.get('#phone-checkbox').check()

    cy.get('#open-text-area').type('teste com input e click',{delay:0})

    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
   })

   it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){
    cy.get('#firstName').type('Gabriel',{delay:15})
    cy.get('#lastName').type('Lisboa',{delay:15})
    cy.get('#email').type('silvalisboa@gmail.com',{delay:15})

    cy.get('#phone').type('1191234567',{delay:15})
      .should('have.value','1191234567')
      .clear()
      .should('have.value','')
    
   })
   
   it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',function(){
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
   })   

   it('envia o formuário com sucesso usando um comando customizado', function() {
    cy.fillMandatoryFieldsAndSubmit()
    
    cy.get('.success').should('be.visible')
   })

   it('seleciona um produto (YouTube) por seu texto', function() {  
    cy.get('#product')
      .select('YouTube')
      .should('have.value','youtube')
   })

   it('seleciona um produto (Mentoria) por seu valor (value)', function () {
    cy.get('#product')
      .select('mentoria')
      .should('have.value','mentoria')
   })

   it('seleciona um produto (Blog) por seu índice', function () {
    cy.get('#product')
      .select(1)
      .should('have.value','blog')
   })

   it('marca o tipo de atendimento "Feedback"', function() {
    cy.get('input[type="radio"][value="feedback"]')
     .check()
     .should('have.value','feedback')
    })

   it('marca todos os tipos de atendimento', function() {
   cy.get('input[type="radio"]')
    .should('have.length',3)
    .each(function($radio) {
     cy.wrap($radio)
     .check()
     .should('be.checked')
    })
   })

   it('marca ambos checkboxes, depois desmarca o último', function() {
    cy.get('input[type="checkbox"]')
        .check()
        .last()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked')
   })

   it('seleciona um arquivo da pasta fixtures', function()  {
      cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json')
      .should(function(input) {
         expect(input[0].files[0].name).to.equal('example.json')
      })
   })

   it('seleciona um arquivo simulando um drag-and-drop', function()  {
      cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
      .should(function(input) {
         expect(input[0].files[0].name).to.equal('example.json')
      })
   })

   it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',function() {
      cy.fixture('example.json').as('exemploJson')
      cy.get('input[type="file"]')
      .selectFile('@exemploJson')
      .should(function(input) {
         expect(input[0].files[0].name).to.equal('example.json')
      })
   })

   it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
      cy.get('#privacy a')
         .should('have.attr', 'target', '_blank')
   })

   it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
      cy.get('#privacy a')
         .invoke('removeAttr','target')
         .click()
      cy.contains('CAC TAT - Política de privacidade')
         .should('be.visible')
   })
})
  