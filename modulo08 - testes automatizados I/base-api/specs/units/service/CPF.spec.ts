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

	it.each([
		{ cpf: '855.638.840-07', resultado: true },
		//{ cpf: '85563884007', resultado: true },
		{ cpf: '820.676.380-51', resultado: false },
		//{ cpf: '02182899014', resultado: true },
		{ cpf: 'aaa.aaa.aaa-ad', resultado: false },
		{ cpf: '111.111.111-51', resultado: false }
	])('Deve retornar corretamente se o CPF é valido ou não $cpf', ({ cpf, resultado }) => {
		const cpfValido = _service.validar(cpf)

		expect(cpfValido).toBe(resultado)
	})

	it('Não deve estourar erro ao executar o método de gerar CPF', () => {
		expect(() => _service.gerar()).not.toThrow()
	})

	it.each([
		{ cpf: '855.638.840-07', resultado: true },
		//{ cpf: '85563884007', resultado: true },
		{ cpf: '820.676.380-51', resultado: false },
		//{ cpf: '02182899014', resultado: true },
		{ cpf: 'aaa.aaa.aaa-ad', resultado: false },
		{ cpf: '111.111.111-51', resultado: false }
	])('Não deve estourar erro ao executar o metodo de validar CPF', ({ cpf, resultado }) => {
		expect(() => _service.validar(cpf)).not.toThrow()
	})

	it('Deve retornar um erro, quando passado uma string vazia', () => {
		expect(() => _service.validar('')).toThrow('Deve ser informado um CPF para validação')
	})
})