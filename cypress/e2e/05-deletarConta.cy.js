
import { deletarConta } from "../support/usuario/deletarConta";
import { validarURL } from "../support/util/validarURL";
import { visitUrl } from "../support/util/visitURL";

const URL = "https://www.automationexercise.com/";

const email = "testelucas@gmail.com";
const senha = "123456";

describe('Teste automatizado de Deletar Conta', () => {

    it('Deletar Conta de usuario', () => {
        visitUrl(URL);
        validarURL(URL);
        
        deletarConta(email, senha);
    });
});