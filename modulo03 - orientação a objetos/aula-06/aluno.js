const Utils = require("./utils");

class Aluno {
  constructor(nome, cpf, dtNasc, id) {
    this.nome = nome;
    this.cpf = cpf;
    this.dtNasc = dtNasc;
    this.id = id;
  }

  calcularIdade() {
    // console.log(Utils.info);
    return Utils.calcularPerioEmAnos(this.dtNasc);
  }
}

const aluno = new Aluno("João", "01234567890", "2000-05-31", 1);
// console.log(aluno.calcularIdade());

const utilsIntancia = new Utils();
utilsIntancia.info = "Teste";
// Imprime o valor do atributo info da classe utils
console.log(Utils.info);
// utilsIntancia.info não faz referência ao atributo info da classe Utils
console.log(utilsIntancia.info);
