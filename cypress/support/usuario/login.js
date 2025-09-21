const botaoLoginCadastro = " Signup / Login";

const botaoDesconectar = " Logout";

const mensagemErroLogin = "Your email or password is incorrect!";

export function loginUsuario(email, senha) {
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).should('be.visible');
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).click();

    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);

    cy.get('[data-qa="login-button"]').click();
    cy.get('body').then($body => {
        const elemento = $body.find('.login-form > form > p'); 
        if (elemento.length > 0) {
            cy.log("AVISO: NÃO EXISTE CONTA CADASTRADA COM ESSE LOGIN!");
            cy.end();
        } else {
            cy.wait(3000);
            cy.get('.shop-menu > .nav > :nth-child(4)').contains(botaoDesconectar).should('be.visible');
        }
    });
}

export function loginErroUsuario(email, senha) {
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).should('be.visible');
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).click();

    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);

    cy.get('[data-qa="login-button"]').click();
    cy.wait(3000);

    cy.get('body').then($body => {
        const elemento = $body.find('.login-form > form > p'); 
        if (elemento.length > 0) {
            cy.get('.login-form > form > p').contains(mensagemErroLogin).should('be.visible');
            cy.log("AVISO: NÃO EXISTE CONTA CADASTRADA COM ESSE LOGIN!");
            cy.end();
        } else {
            cy.wait(3000);
            cy.get('.shop-menu > .nav > :nth-child(4)').contains(botaoDesconectar).should('be.visible');
            cy.log("AVISO: HÁ UMA CONTA CADASTRADA COM ESSE EMAIL!");
            cy.end();
        }
    });
}