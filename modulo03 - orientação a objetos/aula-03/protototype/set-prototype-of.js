// Adicionando protótipos com o Object.setPrototypeOf()
const customPrototype = {
  dizerOla() {
    return `Olá, ${this.nome}`;
  },
  dizerTchau() {
    return `Tchau, ${this.nome}`;
  },
};

const beltrano = {
  nome: "Beltrano de Tal",
};

Object.setPrototypeOf(beltrano, customPrototype);

console.log(beltrano);
console.log(beltrano.dizerTchau());
