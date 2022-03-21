class Animal {
  constructor(nome, especie) {
    this.nome = nome;
    this.especie = especie;
  }

  emitirSom() {
    console.log("Algum som");
  }
}

class Cachorro extends Animal {
  constructor(nome, especie) {
    super(nome, especie);
  }

  emitirSom() {
    console.log("Au au");
  }

  static exibirInfo() {
    console.log(
      "O cão, no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. Teorias postulam que surgiu do lobo cinzento no continente asiático há mais de 100 000 anos."
    );
  }
}

Cachorro.exibirInfo();

const cachorro = new Cachorro("Spike", "Bulldog");
cachorro.emitirSom();
// cachorro.exibirInfo();
