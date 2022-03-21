class Form {
	constructor(type, a = 0, b = 0, c = 0) {
		this.type = type;
		this.a = a;
		this.b = b;
		this.c = c;
	}

	getPerimeter() {
		if (this.type == "triangulo") {
			return this.threeSides()
		} else if (this.type == "quadrado") {
			return this.fourSides()
		}
	}

	fourSides() {
		return (this.a + this.b) * 2;
	}

	threeSides() {
		return this.a + this.b + this.c;
	}
}

const Triangulo = new Form("triangulo", 2, 3, 4);
const Quadrado = new Form("quadrado", 2, 3);

console.log(Triangulo.getPerimeter())
console.log(Quadrado.getPerimeter())