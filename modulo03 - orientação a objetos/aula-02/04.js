class Cliente {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  obterInformacoes() {
    return `Nome: ${this.nome}
            Idade: ${this.idade} anos
            E-mail: ${this.email}`;
  }
}

// const cliente = new Cliente("Fulano", 18, "fulano@email.com");
// console.log(cliente.obterInformacoes());

module.exports = Cliente;
