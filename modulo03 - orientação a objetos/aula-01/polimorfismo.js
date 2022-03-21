class Animal {
  constructor(nome, especie = "Não definida", cor = "Azul") {
    this.nome = nome;
    this.especie = especie;
    this.cor = cor;
  }

  emitirSom() {
    return "Algum som";
  }
}

class Jacare extends Animal {
  constructor(nome, especie, cor) {
    super(nome, especie, cor);
  }

  emitirSom() {
    return "Som do jacaré";
  }
}

const jacare = new Jacare("Jair", "Jacaré");

console.log(jacare);
