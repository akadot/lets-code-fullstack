class Pessoa {
	constructor(nome, dtNasc) {
		this.nome = nome;
		this.dtNasc = dtNasc;
	}

	calculaIdade() {
		let currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		let currentMonth = currentDate.getMonth();
		let currentDay = currentDate.getDate();

		let personDate = new Date(this.dtNasc);
		let year = personDate.getFullYear();
		let month = personDate.getMonth();
		let day = personDate.getDate();

		let age = currentYear - year;

		if (currentMonth < month || (currentMonth == month && currentDay < day)) {
			age--;
		}

		return age;
	}

	detalhaPessoa() {
		let age = this.calculaIdade();
		return `${this.nome}, ${age} anos.`;
	}
}

const Zumiro = new Pessoa("Zumiro", "1996-06-26");

console.log(Zumiro.detalhaPessoa());