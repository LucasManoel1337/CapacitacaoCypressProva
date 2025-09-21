import { cadastrarErroUsuario } from "../support/usuario/cadastro";
import { validarURL } from "../support/util/validarURL";
import dadosLoginCadastroUsuario from "../fixtures/dadosLoginCadastroUsuario.json"

describe('Teste automatizado de erro cadastro', () => {
    beforeEach(() => {
        cy.visit('')
        validarURL('https://www.automationexercise.com/');
    });
    
    it('Cadastrar erro usuario', () => {
        cadastrarErroUsuario(dadosLoginCadastroUsuario.nome, dadosLoginCadastroUsuario.email, dadosLoginCadastroUsuario.senha);
    });
});