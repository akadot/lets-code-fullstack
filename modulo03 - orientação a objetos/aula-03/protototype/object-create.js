// Adicionando protótipos com o Object.create()
const customPrototype = {
  dizerOla() {
    return `Olá, ${this.nome}`;
  },
  dizerTchau() {
    return `Tchau, ${this.nome}`;
  },
};

const fulano = Object.create(customPrototype);
fulano.nome = "Fulano de Tal";

console.log(fulano);
console.log(fulano.dizerOla());
console.log(fulano.dizerTchau());
