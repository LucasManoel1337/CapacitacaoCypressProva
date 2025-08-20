const botaoLoginCadastro = " Signup / Login";

const botaoDesconectar = " Logout";

const mensagemErroLogin = "Your email or password is incorrect!";

export function loginUsuario(email, senha) {
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).should('be.visible');
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).click();

    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);

    cy.get('[data-qa="login-button"]').click();
    cy.wait(3000);
    cy.get('.shop-menu > .nav > :nth-child(4)').contains(botaoDesconectar).should('be.visible');
}

export function loginErroUsuario(email, senha) {
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).should('be.visible');
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).click();

    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);

    cy.get('[data-qa="login-button"]').click();
    cy.wait(3000);
    cy.get('.login-form > form > p').contains(mensagemErroLogin).should('be.visible');
}