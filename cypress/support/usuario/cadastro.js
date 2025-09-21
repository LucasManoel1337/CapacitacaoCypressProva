import { faker } from "@faker-js/faker";

const URLCadastro = "https://www.automationexercise.com/signup";

const tituloDaTelaCadastro = "Enter Account Information";

const botaoLoginCadastro = " Signup / Login";

const mensagemSucessoP1 = "Account Created!";
const mensagemSucessoP2 = "Congratulations! Your new account has been successfully created!";
const mensagemErro = "Email Address already exist!";

const fisrtName = faker.person.firstName();
const lastName = faker.person.lastName();
const companyName = faker.company.name();
const address1 = faker.location.streetAddress() + "" + faker.location.secondaryAddress();
const address2 = faker.location.streetAddress() + "" + faker.location.secondaryAddress();
const country = "Canada";
const state = faker.location.state();
const city = faker.location.city();
const zipcode = faker.location.zipCode();
const mobileNumber = faker.phone.number();


export function cadastrarUsuario(usuario, email, senha){

    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).should('be.visible');
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).click();

    cy.get('[data-qa="signup-name"]').type(usuario);
    cy.get('[data-qa="signup-email"]').type(email);

    cy.get('[data-qa="signup-button"]').click();

    cy.get('body').then($body => {
        const elemento = $body.find('.signup-form > form > p');
        if (elemento.length > 0) {
            cy.log("AVISO: JÁ EXISTE UMA CONTA CADASTRADA NESSE EMAIL!");
            cy.end();
        } else {
            cy.get('.login-form > :nth-child(1)').contains(tituloDaTelaCadastro).should('be.visible');

            cy.get('#id_gender1').check();
            cy.get('[data-qa="password"]').type(senha);

            cy.get('[data-qa="days"]').select('1');
            cy.get('[data-qa="months"]').select('September');
            cy.get('[data-qa="years"]').select('2005');

            cy.get('#newsletter').click();
            cy.get('#optin').click();

            cy.get('[data-qa="first_name"]').type(fisrtName);
            cy.get('[data-qa="last_name"]').type(lastName);
            cy.get('[data-qa="company"]').type(companyName);
            cy.get('[data-qa="address"]').type(address1);
            cy.get('[data-qa="address2"]').type(address2);
            cy.get('[data-qa="country"]').select(country);
            cy.get('[data-qa="state"]').type(state);
            cy.get('[data-qa="city"]').type(city);
            cy.get('[data-qa="zipcode"]').type(zipcode);
            cy.get('[data-qa="mobile_number"]').type(mobileNumber);

            cy.get('[data-qa="create-account"]').click();

            cy.wait(3000);
            cy.get('[data-qa="account-created"]').contains(mensagemSucessoP1).should('be.visible');
            cy.get('.col-sm-9 > :nth-child(2)').contains(mensagemSucessoP2).should('be.visible');
        }
    });
}

export function cadastrarErroUsuario(usuario, email){

    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).should('be.visible');
    cy.get('.header-middle > .container > .row').contains(botaoLoginCadastro).click();

    cy.get('[data-qa="signup-name"]').type(usuario);
    cy.get('[data-qa="signup-email"]').type(email);

    cy.get('[data-qa="signup-button"]').click();

    cy.wait(2000);

    cy.get('body').then($body => {
        const elemento = $body.find('.signup-form > form > p');
        if (elemento.length > 0) {
            cy.get('.signup-form > form > p').contains(mensagemErro).should('be.visible');
            cy.log("AVISO: JÁ EXISTE UMA CONTA CADASTRADA NESSE EMAIL!");
            cy.end();
        } else {
            cy.get('.login-form > :nth-child(1)').contains(tituloDaTelaCadastro).should('be.visible');
            cy.log("AVISO: CONTA NÃO CADASTRADA!")
            cy.end();
        }
    });
}