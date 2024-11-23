Cypress.Commands.add('accessHome', () => {
    cy.viewport(1920, 1080)
    cy.visit('/')
    cy.contains('h2', 'Faça login')
        .should('be.visible')
})

Cypress.Commands.add('loginGeneral', () => {
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')
    cy.get('[data-cy="login-button"]').click()
})