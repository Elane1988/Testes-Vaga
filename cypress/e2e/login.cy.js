describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/') // Visita a URL antes de cada teste
  });

  it('Login com dados válidos', () => {
    cy.get('.fa-user').click();

    cy.get('#user').click().type('lane123nibi@gmail.com');
    cy.get('#password').click().type('Jose@123');
    cy.get('#btnLogin').click();

    cy.get('#swal2-title').contains('Login realizado').should('be.visible');
  });

  it('Login com senha inválida', () => {
    cy.get('.fa-user').click();
    cy.get('#user').click().type('lane123nibi@gmail.com');
    cy.get('#password').click().type('J');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').contains('Senha inválida').should('be.visible');
  });
});