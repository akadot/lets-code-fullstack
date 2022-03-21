function criarContaBancaria(nome, sobrenome, documento, dataNasc) {
  let _nomeCompleto = nome + " " + sobrenome;
  let _documento = documento;

  return {
    nome,
    sobrenome,
    dataNasc,
    obterNomeCompleto: function () {
      return _nomeCompleto;
    },
    obterDocumento: function () {
      return _documento;
    },
  };
}

const conta = criarContaBancaria(
  "Fulano",
  "de Tal",
  "01234567890",
  "1985-10-25"
);

console.log(conta);
console.log(conta.obterNomeCompleto());
console.log(conta.obterDocumento());
