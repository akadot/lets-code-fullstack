import { LoremIpsumService } from "../../../src/services/LoremIpsumService";

describe('Realizando bateria de testes com a classe LoremIpsumService', () => {
	let _service: LoremIpsumService;

	it('Deveria instanciar a classe LoremIpsumService corretamente', () => {
		_service = new LoremIpsumService();

		expect(_service).toBeTruthy();
	})

	it('O metodo getLoremIpsum deveria retornar uma frase com 5 palavras, aleatóriamente distribuídas, ao receber qtdPalavras = 5', () => {
		//Arrange
		const qtdPalavras = 5;

		//Act
		const res = _service.getLoremIpsum(qtdPalavras);
		const resSize = res.split(" ").length;

		//Assert
		expect(resSize).toBe(qtdPalavras);
	})
})