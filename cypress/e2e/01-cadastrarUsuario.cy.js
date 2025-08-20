import { cadastrarUsuario } from "../support/usuario/cadastro";
import { validarURL } from "../support/util/validarURL";
import { visitUrl } from "../support/util/visitURL";

const URL = "https://www.automationexercise.com/";

const name = "Lucas";
const email = "testelucas@gmail.com";
const senha = "123456";

describe('Teste automatizado de cadastro', () => {

    it('Erro de cadastro de usuario', () => {
        visitUrl(URL);
        validarURL(URL);

        cadastrarUsuario(name, email, senha);
    });
});