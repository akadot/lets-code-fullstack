class Bola {
  constructor(cor, raio) {
    this.cor = cor;
    this.raio = raio;
    this.area = this.calcularArea();
    this.volume = this.calcularVolume();
  }

  obterCor() {
    console.log(this.cor);
  }

  calcularArea() {
    return 4 * Math.PI * Math.pow(this.raio, 2);
  }

  calcularVolume() {
    return (4 * Math.PI * Math.pow(this.raio, 3)) / 3;
  }
}

const bola = new Bola("Branca", 5.75);
console.log(bola);
