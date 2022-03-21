function Bola(cor, raio) {
  this.cor = cor;
  this.raio = raio;
}

// Bola.prototype.mostrarCor = function () {
//   return this.cor;
// };

// Bola.prototype.obterArea = function () {
//   return `Área: ${4 * Math.PI * Math.pow(this.raio, 2)}`;
// };

// Bola.prototype.obterVolume = function () {
//   return `Volume: ${(4 * Math.PI * Math.pow(this.raio, 3)) / 3}`;
// };

const bolaPrototype = {
  mostrarCor() {
    return this.cor;
  },
  obterArea() {
    return `Área: ${4 * Math.PI * Math.pow(this.raio, 2)}`;
  },
  obterVolume() {
    return `Volume: ${(4 * Math.PI * Math.pow(this.raio, 3)) / 3}`;
  },
};

Bola.prototype = bolaPrototype;

const bola = new Bola("Branca e preta", 10);
console.log(bola.mostrarCor());
console.log(bola.obterArea());
console.log(bola.obterVolume());
