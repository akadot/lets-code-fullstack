// Login com encapsulamento
class Login {
  #senha;
  #logado;

  constructor() {
    this.usuario = "ivirson";
    this.#senha = "123456";
    this.#logado = false;
  }

  logar(usuario_informado, senha_informada) {
    if (usuario_informado === this.usuario && senha_informada === this.#senha) {
      this.#logado = true;
      console.log(`Usuário ${this.usuario} logado!`);
    } else {
      console.log("Usuário ou senha incorretos");
    }
  }

  isLogado() {
    return this.#logado;
  }

  mostrarSenha() {
    return this.#senha;
  }

  alterarSenha(nova_senha) {
    // console.log(_mostrarSenha());
    if (this.isLogado()) {
      this.#senha = nova_senha;
    } else {
      console.log("Usuário não está logado");
    }
  }
}

const login = new Login();
// login.logar("ivirson", "123456");
// login._logado = true;
// console.log(login.isLogado());
// login.alterarSenha("654321");
login.#senha = "senhaDificil";
console.log(login.mostrarSenha());
console.log(login);
