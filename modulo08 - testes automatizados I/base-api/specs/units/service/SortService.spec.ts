import { SortService, TipoOrdenacao } from "../../../src/services/SortService";

describe('Realizando caso de teste na classe SortService', () => {
	let _service: SortService

	it('Deveria construir corretamente a classe SortService', () => {
		_service = new SortService();

		expect(_service).toBeTruthy()
	});

	it('O método getSort, deveria retornar ["a","b","c"], quando lhe for passado ["c","a","b"]', () => {
		//Arrange
		const arr = ["c", "a", "b"];
		const removerDuplicados = false;
		const ordenacao = TipoOrdenacao.Asc;
		const resEsperado = ["a", "b", "c"];

		//Act
		const res = _service.getSort(arr, removerDuplicados, ordenacao);

		//Assert
		expect(res).toStrictEqual(resEsperado); //toEqual não verifica tipo, só os itens - toStrictEqual verifica ambos
	})

	it('O método getSort, deveria retornar ["c","b","a"], quando lhe for passado ["a","b","c"]', () => {
		//Arrange
		const arr = ["a", "b", "c"];
		const removerDuplicados = false;
		const ordenacao = TipoOrdenacao.Desc;
		const resEsperado = ["c", "b", "a"];

		//Act
		const res = _service.getSort(arr, removerDuplicados, ordenacao);

		//Assert
		expect(res).toStrictEqual(resEsperado); //toEqual não verifica tipo, só os itens - toStrictEqual verifica ambos
	})

	it('O método getSort, deveria retornar ["a","b"], quando lhe for passado ["a","a","b"]', () => {
		//Arrange
		const arr = ["a", "a", "b"];
		const removerDuplicados = true;
		const ordenacao = TipoOrdenacao.Asc;
		const resEsperado = ["a", "b"];

		//Act
		const res = _service.getSort(arr, removerDuplicados, ordenacao);

		//Assert
		expect(res).toStrictEqual(resEsperado); //toEqual não verifica tipo, só os itens - toStrictEqual verifica ambos
	})

	it('O método getSort não deveria retornar erro quando a ordenação for undefined, deveria retornar as palavras sem ordenação', () => {
		//Arrange
		const arr = ["c", "a", "b"];
		const removerDuplicados = false;
		const ordenacao = undefined;

		//Act
		const res = _service.getSort(arr, removerDuplicados, ordenacao);

		//Assert
		expect(() => { _service.getSort(arr, removerDuplicados, ordenacao) }).not.toThrowError();
		expect(res).toStrictEqual(arr);
	})
});