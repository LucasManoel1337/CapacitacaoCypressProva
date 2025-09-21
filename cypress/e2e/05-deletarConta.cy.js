import { deletarConta } from "../support/usuario/deletarConta";
import { validarURL } from "../support/util/validarURL";
import dadosLoginCadastroUsuario from "../fixtures/dadosLoginCadastroUsuario.json"

describe('Teste automatizado de Deletar Conta', () => {
    beforeEach(() => {
        cy.visit('')
        validarURL('https://www.automationexercise.com/');
    });
    
    it('Deletar Conta de usuario', () => {
        deletarConta(dadosLoginCadastroUsuario.email, dadosLoginCadastroUsuario.senha);
    });
});