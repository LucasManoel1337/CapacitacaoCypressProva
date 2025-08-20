
import { loginUsuario } from "../support/usuario/login";
import { validarURL } from "../support/util/validarURL";
import { visitUrl } from "../support/util/visitURL";

const URL = "https://www.automationexercise.com/";

const email = "testelucas@gmail.com";
const senha = "123456";

describe('Teste automatizado de Login', () => {

    it('Login de usuario', () => {
        visitUrl(URL);
        validarURL(URL);
        
        loginUsuario(email, senha);
    });
});