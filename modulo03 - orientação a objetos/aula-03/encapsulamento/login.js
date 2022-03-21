// Login com encapsulamento
class Login {
  constructor() {
    this.usuario = "ivirson";
    let _senha = "123456";
    let _logado = false;

    this.logar = (usuario_informado, senha_informada) => {
      if (usuario_informado === this.usuario && senha_informada === _senha) {
        _logado = true;
        console.log(`Usuário ${this.usuario} logado!`);
      } else {
        console.log("Usuário ou senha incorretos");
      }
    };

    this.isLogado = () => {
      return _logado;
    };

    let _mostrarSenha = () => {
      return _senha;
    };

    this.alterarSenha = (nova_senha) => {
      // console.log(_mostrarSenha());
      if (this.isLogado()) {
        _senha = nova_senha;
      } else {
        console.log("Usuário não está logado");
      }
    };
  }
}

const login = new Login();
// login.logar("ivirson", "123456");
// login._logado = true;
// console.log(login.isLogado());
// login.alterarSenha("654321");
// login._senha = "senhaDificil";
// console.log(login._mostrarSenha());
console.log(login);
