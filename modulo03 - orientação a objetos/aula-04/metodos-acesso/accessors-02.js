/* 
  Getters e Setters
  get nome()
*/
class Usuario {
  #nome;
  #sexo;
  #email;

  constructor(nome, sexo, email) {
    this.#nome = nome;
    this.#sexo = sexo;
    this.#email = email;
  }

  get nome() {
    return this.#nome;
  }

  set nome(valor) {
    if (valor.length >= 2) {
      this.#nome = valor;
    } else {
      console.log("O nome precisa ter ao menos 2 caracteres");
    }
  }
}

const usuario1 = new Usuario("Fernanda Lima", "Feminino", "fernanda@email.com");
usuario1.nome = "A";
console.log(usuario1.nome);
