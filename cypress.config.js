module.exports = {
  projectId: 'g11u33',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {},
    charts:true,
    reportTitle:'Testes Vaga',
    reportPageTitle: 'Login',
    baseUrl:'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     
    },
  },
};
