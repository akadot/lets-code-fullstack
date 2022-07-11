import { CPFService } from "../../../src/services/CPFService";

describe('Realizando bateria de testes com a classe CPFService', () => {
	let _service: CPFService;

	it('Deveria instanciar a classe CPFService corretamente', () => {
		_service = new CPFService();

		expect(_service).toBeTruthy();
	})


	it.each([
		{ cpf: "00000000000", validacao: false },
		{ cpf: "587.516.620-78", validacao: true },
		{ cpf: "", validacao: false },
		{ cpf: "60974643041", validacao: true }
	])("Recebendo CPF $cpf, a função getValidation deveria retornar o resultado: $validacao", ({ cpf, validacao }) => {
		const res = _service.getValidation(cpf)

		expect(res).toBe(validacao);
	});
})