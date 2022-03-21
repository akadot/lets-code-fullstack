/* 
  Getters e Setters
  getNome()
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

  getNome() {
    return this.#nome;
  }

  getSexo() {
    return this.#sexo;
  }

  getEmail() {
    return this.#email;
  }

  setNome(valor) {
    this.#nome = valor;
  }
}

const usuario1 = new Usuario("Fernanda Lima", "Feminino", "fernanda@email.com");
// console.log(usuario1.getSexo());
// console.log(usuario1.getEmail());
usuario1.setNome("Andrea Lima");
console.log(usuario1.getNome());
