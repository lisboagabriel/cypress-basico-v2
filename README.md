## cypress-basico-v2
Projeto de aprendizado para o curso basico de cypress.

## Pré requisitos
- [git](https://git-scm.com/) (estou usando a versão `2.34.1`)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v16.13.2` )
- npm (estou usando a versão `8.3.2` )
- [Visual Studio Code](https://code.visualstudio.com/) ou alguma outra IDE de sua preferência

> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.

## Instalação
Execute npm install(ou npm i para a versão curta) para instalar as dependências de desenvolvimento.

## Testes
Voce pode rodar os testes simulando um viewport desktop ou mobile

### Desktop
Execute `npm test`(ou `npm t` para a versão curta) para executar o teste no modo headless.

Ou execute `npm run cy:open` para abrir o Cypress no modo interativo.
- Dentro do arquivo `cypress.json` :
`{
    "pluginsFile": false,
    "viewportHeight": 880,
    "viewportWidth": 1280
  }`

### Mobile
Execute `npm test`(ou `npm t` para a versão curta) para executar o teste no modo headless.

Ou execute `npm run cy:open` para abrir o Cypress no modo interativo.
- Dentro do arquivo `cypress.json` :
`{
    "pluginsFile": false,
    "viewportHeight": 410,
    "viewportWidth": 860
  }`