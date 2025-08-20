import { loginErroUsuario } from "../support/usuario/login";
import { validarURL } from "../support/util/validarURL";
import { visitUrl } from "../support/util/visitURL";

const URL = "https://www.automationexercise.com/";

const email = "testelucas1@gmail.com";
const senha = "123456";

describe('Teste automatizado de Erro no Login', () => {

    it('Erro no Login de usuario', () => {
        visitUrl(URL);
        validarURL(URL);
        
        loginErroUsuario(email, senha);
    });
});