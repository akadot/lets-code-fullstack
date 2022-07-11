export class RegisterService {
	#profissoes: Array<string>;
	#canais: Array<string>;

	constructor() {
		this.#profissoes = ["Carteiro"]
		this.#canais = ["Youtube"]
	}


	validaNome = (nome: String) => {
		const resArr = nome.split(" ");

		if (nome.length <= 1 || nome == '' || resArr.length <= 0) {
			return false;
		}

		return true;
	}

	validaDataNasc = (dataNasc: String) => {
		let dataLetters = dataNasc.match(/[a-zA-Z]/g)?.join("");

		if (!dataNasc || dataNasc == "" || dataLetters) {
			return false;
		}

		let dateArr: Array<String> = [];
		if (dataNasc.indexOf("-")) {
			dateArr = dataNasc.split("-");
		} else if (dataNasc.indexOf("/")) {
			dateArr = dataNasc.split("/");
		}

		const today = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(" ")[0];
		const todayArr = today.split("/");

		if (today == `${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`) {
			return false;
		}

		const todayParse = Date.parse(`${todayArr[1]}-${todayArr[0]}-${todayArr[2]}`)
		const dataNascParse = Date.parse(`${dateArr[1]}-${dateArr[0]}-${dateArr[2]}`)

		if (dataNascParse > todayParse) {
			return false;
		}

		return true;
	}

	validaProfissao = (profissao: String) => {
		if (profissao != "" && !this.#profissoes.includes(profissao.toString())) {
			return false;
		}
		return true
	}

	validaPrimeiroContato = (primeiroContato: String) => {
		if (primeiroContato != "" && !this.#canais.includes(primeiroContato.toString())) {
			return false;
		}
		return true
	}

	validaTelefone = (telefone: String) => {
		let phoneNumbers = telefone.match(/\d/g)?.join("");

		if (telefone != "" && telefone != phoneNumbers) {
			return false;
		}

		return true
	}

	validaEndereco = (rua: String, num: Number) => {

		if (!Number(num) || rua == "" || Number(rua) || num <= 0) {
			return false;
		}

		return true
	}

	validaCelular = (celular: String) => {
		let celNumbers = celular.match(/\d/g)?.join("");

		if (celular == "") {
			return false;
		}

		if (celular != celNumbers) {
			return false;
		}

		return true;
	}

	validaEmail = (email: String) => {
		let emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

		if (email == "" || !emailPattern) {
			return false;
		}

		return true
	}

	validaObs = (obs: String) => { return true }

	validaData = (created_at: String) => {

		return true
	}

	validaRegister = (nome: String, dataNasc: String, rua: String, num: Number, email: String, celular: String, created_at: String, telefone: String, obs: String, profissao: String, primeiroContato: String) => {

		this.validaDataNasc(dataNasc)
		this.validaProfissao(profissao)
		this.validaTelefone(telefone)
		this.validaEmail(email)
		this.validaEndereco(rua, num)

		return { nome, dataNasc, profissao, primeiroContato, rua, num, email, obs, created_at, celular, telefone }
	}
}