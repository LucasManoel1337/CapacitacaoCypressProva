const botaoLoginCadastro = " Signup / Login";

const botaoDeletar = " Delete Account";

const mensagemSucessoP1 = "Account Deleted!";
const mensagemSucessoP2 = "Your account has been permanently deleted!";

export function deletarConta(email, senha) {
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).should('be.visible');
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).click();

    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);

    cy.get('[data-qa="login-button"]').click();
    cy.wait(3000);

    cy.get('body').then($body => {
        const elemento = $body.find('.login-form > form > p'); 
        if (elemento.length > 0) {
            cy.log("AVISO: NÃO EXISTE CONTA CADASTRADA COM ESSE LOGIN!");
            cy.end();
        } else {
            cy.get('.shop-menu > .nav > :nth-child(5)').contains(botaoDeletar).should('be.visible');
            cy.get('.shop-menu > .nav > :nth-child(5)').contains(botaoDeletar).click();

            cy.wait(3000);
            cy.get('b').contains(mensagemSucessoP1).should('be.visible');
            cy.get('.col-sm-9 > :nth-child(2)').contains(mensagemSucessoP2).should('be.visible');
        }
    });
}