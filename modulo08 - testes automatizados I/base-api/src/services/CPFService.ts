export class CPFService {
	#invalidCPF;

	constructor() {
		this.#invalidCPF = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];
	}

	#obterDigitoVerificador = (...params: string[]) => {
		const numeros = [].concat.apply(
			[],
			params.map((o) => o.split("") as any)
		);

		let x = 0;
		let comeco = params.length == 4 ? 11 : 10;

		for (let i = comeco, j = 0; i >= 2; i--, j++) {
			x += parseInt(numeros[j]) * i;
		}

		const y = x % 11;
		return y < 2 ? 0 : 11 - y;
	};

	#getRandomNumber = () =>
		`${Math.floor(Math.random() * 999)}`.padStart(3, "0");

	gerar = () => {
		const a = this.#getRandomNumber();
		const b = this.#getRandomNumber();
		const c = this.#getRandomNumber();

		const primeiroDigito = this.#obterDigitoVerificador(a, b, c);
		const segundoDigito = this.#obterDigitoVerificador(
			a,
			b,
			c,
			primeiroDigito.toString()
		);

		return `${a}.${b}.${c}-${primeiroDigito}${segundoDigito}`;
	};

	validar = (cpf: string) => {
		if (!cpf) {
			return false
		}

		const cpfLimpo = String(cpf).replace(/[\s.-]/g, "");

		if (this.#invalidCPF.includes(cpfLimpo)) {
			return false;
		}

		let sum = 0;
		let res;

		for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
		res = (sum * 10) % 11;

		if ((res == 10) || (res == 11)) { res = 0 };
		if (res != parseInt(cpfLimpo.substring(9, 10))) { return false };

		sum = 0;
		for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
		res = (sum * 10) % 11;

		if ((res == 10) || (res == 11)) { res = 0 };
		if (res != parseInt(cpfLimpo.substring(10, 11))) { return false };

		return true
	};
}

