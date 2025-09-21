import { loginErroUsuario } from "../support/usuario/login";
import { validarURL } from "../support/util/validarURL";
import dadosLoginCadastroUsuario from "../fixtures/dadosLoginCadastroUsuario.json"

describe('Teste automatizado de Erro no Login', () => {
    beforeEach(() => {
        cy.visit('')
        validarURL('https://www.automationexercise.com/');
    });

    it('Erro no Login de usuario', () => {
        loginErroUsuario(dadosLoginCadastroUsuario.emailError, dadosLoginCadastroUsuario.senha);
    });
});