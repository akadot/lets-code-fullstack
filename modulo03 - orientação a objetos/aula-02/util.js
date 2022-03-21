// class Animal {
//   constructor(cor, nome) {
//     this.cor = cor;
//     this.nome = nome;
//   }

//   obterInfo() {
//     return `${this.cor} - ${this.nome}`;
//   }
// }

// class Cachorro extends Animal {
//   constructor(cor, nome, raca) {
//     super(cor, nome);
//     this.raca = raca;
//   }
// }

// const cachorro = new Cachorro("Totó", "Hotweiller");
// console.log(cachorro);

class Aluno {
  constructor() {}

  receberNota1(valor) {
    this.nota1 = valor;
  }

  receberNota2(valor) {
    this.nota2 = valor;
  }

  calcularMedia() {
    this.media = (this.nota1 + this.nota2) / 2;
  }
}

const aluno = new Aluno();
console.log(aluno);
aluno.nota1 = 8;
aluno.nota2 = 7;
console.log(aluno);
aluno.calcularMedia();
console.log(aluno);
