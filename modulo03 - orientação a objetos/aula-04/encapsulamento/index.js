class Usuario {
  #nome;
  #sexo;
  #email;
  #senha;
  #dtNasc;
  #cpf;
  #endereco;

  constructor(nome, sexo, email, senha, dtNasc, cpf, endereco) {
    this.#nome = nome;
    this.#sexo = sexo;
    this.#email = email;
    this.#senha = senha;
    this.#dtNasc = dtNasc;
    this.#cpf = cpf;
    this.#endereco = endereco;
  }

  obterDados() {
    return {
      nome: this.#nome,
      sexo: this.#sexo,
      email: this.#email,
      cpf: this.#mascararCpf(),
      endereco: this.#mascararDados(this.#endereco),
    };
  }

  #mascararCpf() {
    const cpfMascarado = this.#cpf.replace(
      /(\d{3})?(\d{3})?(\d{3})?(\d{2})/,
      "$1.$2.$3-$4"
    );
    return this.#mascararDados(cpfMascarado);
  }

  #mascararDados(dado) {
    const str1 = dado.substring(0, 4);
    const str2 = dado.substring(4, dado.length);
    return str1 + str2.replace(/[^-,. ]/g, "x");
  }
}

const usuario = new Usuario(
  "Pedro Gustavo",
  "Masculino",
  "pedro@mail.com",
  "123456",
  "1988-05-26",
  "01234567890",
  "Rua Dois de Julho, 234, Bairro Qualquer, Cidade Aleatória - BA"
);

console.log(usuario.obterDados());
console.log();
