import { loginUsuario } from "../support/usuario/login";
import { validarURL } from "../support/util/validarURL";
import dadosLoginCadastroUsuario from "../fixtures/dadosLoginCadastroUsuario.json"

describe('Teste automatizado de Login', () => {
    beforeEach(() => {
        cy.visit('')
        validarURL('https://www.automationexercise.com/');
    });

    it('Login de usuario', () => {
        loginUsuario(dadosLoginCadastroUsuario.email, dadosLoginCadastroUsuario.senha);
    });
});