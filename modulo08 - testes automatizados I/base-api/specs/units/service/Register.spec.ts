import { RegisterService } from "../../../src/services/RegisterService";

const longString = "afjpatttwxayakfrceaoyoxiyyidhugvpuzjomdfrfwtcdkvrnrzprwqkndojimksnihsydwnzznadmezzjdqngwtyhntvflgisemjctzvrgzkgvdczaxuwrawdszgaykxhzduzkcxpovshcaytlftyezreusrjnqgnwykdokbnigzhbvkziqdgkeutpcgklybspthmukvdaolzxbkspzbcdbfyammsmayuwqgrfufdlyjgmdqtwpmdajgpsmbmheqbcsgzgzkgqyavxii";
const longDate = "07/64/75/25/66/99/35/72/71-04-94-55-19-08-75-53-22-33689228249037741282057056";
const longPhone = "076475256699357271049455190875532233689228249037741282057056";

describe('Realizando bateria de testes com a classe RegisterService', () => {
	let _service: RegisterService;

	it("Deveria instanciar corretamente a classe RegisterService", () => {
		const res = _service = new RegisterService();

		expect(res).toBeTruthy();
	})

	//Testando Nome Completo
	it.each([
		{ nome: 'Australopitécos', validacao: false }, //somente primeiro nome
		{ nome: 'Zumiro Zika do Baile', validacao: true }, //tudo certo chefia
		{ nome: 'M4ndr4k3 d0 B41l3', validacao: false }, //números no lugar do nome (nome de principe vai pra pqp, imperialismo e monarquia aqui não)
		{ nome: '', validacao: false }, //recebe vazio
	])('Deveria retornar $validacao ao receber $nome.', ({ nome, validacao }) => {
		const res = _service.validaNome(nome);

		expect(res).toBe(validacao);
	});

	//Testando CPF
	it.each([
		{ cpf: '120.126.380-11', validacao: false },
		{ cpf: '085.544.732-62', validacao: false },
		{ cpf: '000.000.006-06', validacao: false },
		{ cpf: '456.128.653-50', validacao: true },
		{ cpf: "782.897.030-74", validacao: true },
		{ cpf: 'aaa.aaa.aaa-ad', validacao: false },
		{ cpf: '111.111.111-11', validacao: false },
		{ cpf: '', validacao: false }, //recebe vazio
	])('Deveria retornar $validacao ao receber $cpf.', ({ cpf, validacao }) => {
		const res = _service.validaCPF(cpf);

		expect(res).toBe(validacao);
	});

	//Testando Data de Aniversário
	it.each([
		{ dataNasc: '12-07-2022', validacao: false }, //data de hoje
		{ dataNasc: '11-09-2022', validacao: false }, //futuro
		{ dataNasc: '1101121292022', validacao: false }, //formato errado
		{ dataNasc: 'A', validacao: false }, //contém texto
		{ dataNasc: '', validacao: false }, //valor vazio
		{ dataNasc: '26/06/1996', validacao: true }, //ok
		{ dataNasc: '26-06-1996', validacao: true }, //ok
	])('Deveria retornar $validacao ao receber $dataNasc.', ({ dataNasc, validacao }) => {
		const res = _service.validaDataNasc(dataNasc);

		expect(res).toBe(validacao);
	});

	//Testando Profissão
	it.each([
		{ profissao: '3', validacao: false }, //recebe um número
		{ profissao: 'Carteiro', validacao: true }, //tudo ok
		{ profissao: '', validacao: true }, //não é obrigatório
	])('Deveria retornar $validacao ao receber $profissao.', ({ profissao, validacao }) => {
		const res = _service.validaProfissao(profissao);

		expect(res).toBe(validacao);
	});

	//Testando Primeiro Canal de contato
	it.each([
		{ primeiroContato: 'Minha mãe', validacao: false }, //não pertence ao conjunto de opções passadas
		{ primeiroContato: 'Youtube', validacao: true }, //tudo ok
		{ primeiroContato: '', validacao: true }, //não é obrigatório
	])('Deveria retornar $validacao ao receber $primeiroContato.', ({ primeiroContato, validacao }) => {
		const res = _service.validaPrimeiroContato(primeiroContato);

		expect(res).toBe(validacao);
	});

	//Testando Endereço
	it.each([
		{ rua: 'Rua X', num: 50, validacao: true }, //tudo ok
		{ rua: '', num: 50, validacao: false }, //endereco é obrigatório
		{ rua: '', num: -1, validacao: false }, //numero é obrigatório
	])('Deveria retornar $validacao ao receber $rua.', ({ rua, num, validacao }) => {
		const res = _service.validaEndereco(rua, num);

		expect(res).toBe(validacao);
	});

	//Testando Telefone
	it.each([
		{ telefone: '1929302191', validacao: true }, //ok
		{ telefone: '1929asas302191', validacao: false }, //somente números são aceitos
		{ telefone: '', validacao: true }, //não é obrigatório
	])('Deveria retornar $validacao ao receber $telefone.', ({ telefone, validacao }) => {
		const res = _service.validaTelefone(telefone);

		expect(res).toBe(validacao);
	});

	//Testando Celular
	it.each([
		{ celular: '1929302191', validacao: true }, //ok
		{ celular: '1929asas302191', validacao: false }, //somente números são aceitos
		{ celular: '', validacao: false }, //é obrigatório
	])('Deveria retornar $validacao ao receber $celular.', ({ celular, validacao }) => {
		const res = _service.validaCelular(celular);

		expect(res).toBe(validacao);
	});

	//Testando Email
	it.each([
		{ email: 'test@gmail.com', validacao: true }, //ok
		{ email: 'test.com', validacao: false }, //inválido
		{ email: '', validacao: false }, //é obrigatório
	])('Deveria retornar $validacao ao receber $email.', ({ email, validacao }) => {
		const res = _service.validaEmail(email);

		expect(res).toBe(validacao);
	});

	//Testando Observação/Comentários
	it.each([
		{ obs: 'AaAaSDASDFAFGSDÇOJFGSÇDGLÇ', validacao: true }, //ok
		{ obs: '', validacao: true }, //não é obrigatório
	])('Deveria retornar $validacao ao receber $obs.', ({ obs, validacao }) => {
		const res = _service.validaObs(obs);

		expect(res).toBe(validacao);
	});

	//Testando Data de Criação
	it.each([
		{ created_at: '22-06-2020', validacao: true }, //ok
		{ created_at: '22/06/2020', validacao: true }, //ok
		{ created_at: '2A/06/2020', validacao: false }, //inválido
		{ created_at: '1101121292022', validacao: false },
		{ created_at: '2A2432423062020', validacao: false }, //inválido
		{ created_at: '11-08-2022', validacao: false }, //futuro
		{ created_at: '', validacao: false }, //é obrigatório
	])('Deveria retornar $validacao ao receber $created_at.', ({ created_at, validacao }) => {
		const res = _service.validaData(created_at);

		expect(res).toBe(validacao);
	});

	//Testando Cadastro Completo
	it.each([
		{
			body: {
				nome: "",
				cpf: "",
				dataNasc: "20-06-2020",
				rua: "rua",
				num: 2,
				email: "email@email.com",
				celular: "1234",
				created_at: "data",
				telefone: "email@.com",
				obs: "obs",
				profissao: "",
				primeiroContato: "primeiro"
			}, validacao: false
		},
		{
			body: {
				nome: "José da Silva",
				dataNasc: "20-06-2020",
				cpf: "782.897.030-74",
				rua: "Rua X",
				num: 25,
				email: "email@email.com",
				celular: "12344564",
				created_at: "12-07-2022",
				telefone: "12344564",
				obs: "Sem observação",
				profissao: "Advogado",
				primeiroContato: "Youtube"
			}, validacao: true
		}
	])('Deveria retornar $validacao ao receber todas as informações de cadastro.', ({ validacao, body }) => {
		const { nome, cpf, dataNasc, rua, num, email, celular, created_at, telefone, obs, profissao, primeiroContato } = body;

		const res = _service.validaRegister(nome, cpf, dataNasc, rua, num, email, celular, created_at, telefone, obs, profissao, primeiroContato);

		expect(res).toBe(validacao);
	});

	//Testando Cadastro Completo (Caracteres em Excesso)
	it.each([
		{
			body: {
				nome: longString,
				cpf: longPhone,
				dataNasc: longDate,
				rua: longString,
				num: 25,
				email: `${longString}@gmail.com`,
				celular: longPhone,
				created_at: longDate,
				telefone: longPhone,
				obs: longString,
				profissao: longString,
				primeiroContato: longString
			}
		}
	])('Deveria retornar um erro de Caracteres em Excesso.', ({ body }) => {
		const { nome, cpf, dataNasc, rua, num, email, celular, created_at, telefone, obs, profissao, primeiroContato } = body;


		expect(() => _service.validaRegister(nome, cpf, dataNasc, rua, num, email, celular, created_at, telefone, obs, profissao, primeiroContato)).toThrowError("O número de caracteres foi excedido.");
	});
})