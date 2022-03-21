class FiguraGeometrica {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return `A área é: ${this.base * this.altura}`;
  }
}

class Quadrado extends FiguraGeometrica {
  constructor(base, altura) {
    super(base, altura);
  }
}

class Retangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super(base, altura);
  }
}

class Triangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super(base, altura);
  }

  calcularArea() {
    return `A área é: ${(this.base * this.altura) / 2}`;
  }
}

class Circulo extends FiguraGeometrica {
  constructor(base, altura) {
    super(base, altura);
  }

  calcularArea() {
    const raio = this.altura / 2;
    const area = 3.14 * raio * raio;

    return `A área é: ${area}`;
  }
}

const quadrado = new Quadrado(5, 5);
const retangulo = new Retangulo(3, 4);
const triangulo = new Triangulo(3, 4);
const circulo = new Circulo(5, 5);
console.log(circulo.calcularArea());
