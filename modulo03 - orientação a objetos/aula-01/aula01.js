class Animal {
	constructor(nome, especie, cor, regiao) {
		this.nome = nome;
		this.especie = especie;
		this.cor = cor;
		this.regiao = regiao;
	}

	emitirSom() {
		return "Grunido Genêrico"
	}

	verificaExtinto() {
		if (this.extinto == true) {
			return "Animal Extinto"
		} else {
			return "Animal não extinto"
		}
	}
}

class Jacaré extends Animal {
	constructor(nome, especie, cor, regiao, extinto = false) {
		super(nome, especie, cor, regiao);
		this.extinto = extinto;
	}

	emitirSom() {
		return "Grunido Jacaré";
	}
}

class Passaro extends Animal {
	constructor(nome, especie, cor, regiao, extinto = false) {
		super(nome, especie, cor, regiao);
		this.extinto = extinto;
	}

	emitirSom() {
		return "Piado";
	}
}

const Juca = new Jacaré("Juca", "Jacaré do Papo Amarelo", "Verde e Amarelo", "Pântanos e Rios", true);

const Pablo = new Passaro("Pablo", "Pardal", "Marrom", "Ar", false)

console.log(Juca)
console.log(Juca.emitirSom())
console.log(Juca.verificaExtinto())
console.log("----")
console.log(Pablo)
console.log(Pablo.emitirSom())
console.log(Pablo.verificaExtinto())

