class Utils {
  static info = "Alguma informação";

  constructor() {
    this.outraInfo = "";
  }

  umMetodo() {
    return "";
  }

  static calcularPerioEmAnos(data) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getUTCFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    const dataAnterior = new Date(data.replace("-", "/"));
    const anoAniversario = dataAnterior.getUTCFullYear();
    const mesAniversario = dataAnterior.getMonth() + 1;
    const diaAniversario = dataAnterior.getDate();

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

module.exports = Utils;
