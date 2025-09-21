import { cadastrarUsuario } from "../support/usuario/cadastro";
import { validarURL } from "../support/util/validarURL";
import dadosLoginCadastroUsuario from "../fixtures/dadosLoginCadastroUsuario.json"

describe('Teste automatizado de cadastro', () => {
    beforeEach(() => {
        cy.visit('')
        validarURL('https://www.automationexercise.com/');
    });

    it('Erro de cadastro de usuario', () => {
        cadastrarUsuario(dadosLoginCadastroUsuario.nome, dadosLoginCadastroUsuario.email, dadosLoginCadastroUsuario.senha);
    });
});