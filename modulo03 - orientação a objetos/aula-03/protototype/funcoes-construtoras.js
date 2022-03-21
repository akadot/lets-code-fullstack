// Adicionando protótipos com Funções Construtoras
function Pessoa(nome) {
  this.nome = nome;
}

// Pessoa.prototype.dizerOla = function () {
//   return `Olá, ${this.nome}`;
// };

const customPrototype = {
  dizerOla() {
    return `Olá, ${this.nome}`;
  },
  dizerTchau() {
    return `Tchau, ${this.nome}`;
  },
};

Pessoa.prototype = customPrototype;

const p1 = new Pessoa("Ivirson");
// console.log(p1);
// console.log(p1.dizerOla());

function Cachorro(nome) {
  this.nome = nome;
}

Cachorro.prototype = customPrototype;

const cachorro = new Cachorro("Spike");
console.log(cachorro.dizerOla());
