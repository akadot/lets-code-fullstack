// const pessoa = {
//   nome: "André",
//   sobrenome: "Santos",
// };

class Pessoa {
  constructor(nome, sobrenome, dtNasc) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dtNasc = new Date(dtNasc.replace("-", "/"));
  }

  falar() {
    return "Olá";
  }

  obterNomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  calculaIdade() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getUTCFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    const anoAniversario = this.dtNasc.getUTCFullYear();
    const mesAniversario = this.dtNasc.getMonth() + 1;
    const diaAniversario = this.dtNasc.getDate();

    let idade = anoAtual - anoAniversario;

    if (
      mesAtual < mesAniversario ||
      (mesAtual == mesAniversario && diaAtual < diaAniversario)
    ) {
      idade--;
    }

    return idade;
  }
}

// let Pessoa = class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
// };

// const andre = new Pessoa("André", "Santos", "2000-05-25");

// console.log(andre.falar());
// console.log(andre.obterNomeCompleto());
// console.log(andre.calculaIdade());

class Professor extends Pessoa {
  constructor(nome, sobrenome, dtNasc, disciplina) {
    super(nome, sobrenome, dtNasc);
    this.disciplina = disciplina;
  }
}

class Aluno extends Pessoa {
  constructor(nome, sobrenome, dtNasc, turma) {
    super(nome, sobrenome, dtNasc);
    this.turma = turma;
  }
}

const prof = new Professor("João", "Silva", "1988-12-24", "Matemática");
const joaozinho = new Aluno("Joaozinho", "Santos", "2008-12-02", "5º ano");

console.log(joaozinho);
