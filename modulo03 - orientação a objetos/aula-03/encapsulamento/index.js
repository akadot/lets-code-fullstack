// Login sem encapsulamento
class Login {
  constructor() {
    this.usuario = "ivirson";
    this.senha = "123456";
    this.logado = false;
  }

  logar(usuario_informado, senha_informada) {
    if (usuario_informado === this.usuario && senha_informada === this.senha) {
      this.logado = true;
      console.log(`Usuário ${this.usuario} logado!`);
    } else {
      console.log("Usuário ou senha incorretos");
    }
  }
}

const login = new Login();
login.logar("ivirson", "123456");
// login.logado = true;
// console.log(login);
