import { StringService } from "../../../src/services/StringService";

describe('Relizando teste da classe StringService', () => {
	let _service: StringService;

	it('Deveria instanciar a classe StringService corretamente', () => {
		_service = new StringService();

		expect(_service).toBeTruthy()
	})

	it('Deveria limpar palavras duplicadas de ["a","a","b"] e retornar ["a","b"]', () => {
		//Arrange
		const arr = ["a", "a", "b"];
		const resEsperado = ["a", "b"];

		//Act
		const res = _service.removerDuplicadas(arr);

		//Assert
		expect(res).toStrictEqual(resEsperado);
	})
})