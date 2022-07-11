export class CPFService {
	#invalidCPF;

	constructor() {
		this.#invalidCPF = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];
	}

	getValidation = (cpf: string) => {
		let CPFString = cpf;

		if (CPFString.indexOf(".") != -1 || CPFString.indexOf("-") != -1) {
			const cleanCPF = CPFString.replace(/\D/g, '');
			CPFString = cleanCPF;
		}

		if (this.#invalidCPF.includes(CPFString)) {
			return false
		}

		if (CPFString.length != 11 || CPFString.length <= 0 || CPFString == undefined) {
			return false;
		}

		const arrayCPF = CPFString.split("").map(item => Number(item));

		console.log(arrayCPF);

		return true;
	}

	generate = () => { }
}