import { RegisterService } from "../../../src/services/RegisterService";

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
		{ nome: 'M4ndr4k3 d0 B41l3', validacao: false }, //números no lugar do nome (nome de principe vai pra pqp)
		{ nome: '', validacao: false }, //recebe vazio
	])('Deveria retornar $validacao ao receber $nome.', ({ nome, validacao }) => {
		const res = _service.validaNome(nome);

		expect(res).toBe(validacao);
	});

	//Testando CPF

	//Testando Data de Aniversário
	it.each([
		{ dataNasc: '11-07-2022', validacao: false }, //data de hoje
		{ dataNasc: '11-09-2022', validacao: false }, //futuro
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
		{ created_at: '06/22/2020', validacao: false }, //invalido
		{ created_at: '06-22-2020', validacao: false }, //invalido
		{ created_at: '2A/06/2020', validacao: false }, //inválido
		{ created_at: '11-08-2022', validacao: false }, //inválido
		{ created_at: '', validacao: false }, //é obrigatório
	])('Deveria retornar $validacao ao receber $created_at.', ({ created_at, validacao }) => {
		const res = _service.validaData(created_at);

		expect(res).toBe(validacao);
	});

})