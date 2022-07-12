import { CPFService } from "../../../src/services/CPFService"

describe('testando CPFService', () => {
	let _service: CPFService

	it('Deve iniciar corretamente a classe CPFService', () => {
		_service = new CPFService()

		expect(_service).toBeTruthy()
	})

	it('Deve gerar corretamente um CPF valido', () => {
		for (let index = 0; index < 10; index++) {
			const cpf = _service.gerar() //999.999.999-99
			const cpfValido = _service.validar(cpf) // true / false

			expect(cpf).toHaveLength(14)
			expect(cpfValido).toBe(true)
		}
	})


	it('Não deve estourar erro ao executar o método de gerar CPF', () => {
		expect(() => _service.gerar()).not.toThrow()
	})


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
		const res = _service.validar(cpf);

		expect(res).toBe(validacao);
	});
})