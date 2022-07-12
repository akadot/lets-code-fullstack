import { CEPService } from "../../../src/services/CEPService";

const resultadoEsperado = {
	cep: "89010025",
	state: "SC",
	city: "Blumenau",
	neighborhood: "Centro",
	street: "Rua Doutor Luiz de Freitas Melro",
	service: "correios",
	location: {
		type: "Point",
		coordinates: { longitude: "-49.06122", latitude: "-26.9248865" },
	},
};

jest.mock("node-fetch", () => {
	const gerarResultado = () => {
		return {
			json: () => resultadoEsperado
		}
	}

	return jest.fn().mockResolvedValue(gerarResultado())
})

describe("Testando CEPService", () => {
	let _service: CEPService;

	it("Deveria iniciar corretamente a classe CEPService", () => {
		_service = new CEPService();
	});

	it("Deveria me retonar corretamente as informações do CEP: 89010025", async () => {
		const result = await _service.obter("89010025");

		expect(result).toEqual(resultadoEsperado);
	});
});