const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://playground.cyskills.com.br/",
    specPattern: "cypress/e2e/features/*feature",
    setupNodeEvents(on, config) {
      // Configurando o tamanho da janela para uma tela maior
      config.viewportWidth = 1920;
      config.viewportHeight = 1080;
      
      // Necessário retornar o config para que as alterações sejam aplicadas
      on("file:preprocessor", cucumber());
      
      // Retornando o config para garantir que as alterações sejam aplicadas
      return config;
    },
  },
});
