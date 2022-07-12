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

	#digitosSaoIguais = (digits: string): boolean => {
		for (let i = 0; i < 10; i++) {
			if (digits === new Array(digits.length + 1).join(String(i))) {
				return true;
			}
		}

		return false;
	};

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
		if (!cpf)
			throw new Error('Deve ser informado um CPF para validação')

		const cpfLimpo = String(cpf).replace(/[\s.-]/g, "");
		const cpfArray: string[] = cpf.split(/[\s.-]/g);
		const numeros = cpfArray.slice(0, 3);

		if (cpfLimpo.length !== 11 || this.#digitosSaoIguais(cpfLimpo)) {
			return false;
		}

		const primeiroDigitoVerificador = this.#obterDigitoVerificador(...numeros);
		const segundoDigitoVerificador = this.#obterDigitoVerificador(
			...numeros,
			primeiroDigitoVerificador.toString()
		);

		return (
			cpfArray[3] === `${primeiroDigitoVerificador}${segundoDigitoVerificador}`
		);
	};
}

