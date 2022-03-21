class Forma {
	constructor(type) {
		this.type = type;
	}

	getType() {
		return this.type;
	}
}

class Triangulo extends Forma {
	constructor(type, a, b, c) {
		super(type);
		this.a = a;
		this.b = b;
		this.c = c;
	}

	calcPerimeter() {
		return this.a + this.b + this.c;
	}
}

const TrianguloA = new Triangulo("Triângulo", 2, 3, 4);

console.log(TrianguloA);
console.log(TrianguloA.getType());
console.log(TrianguloA.calcPerimeter());


