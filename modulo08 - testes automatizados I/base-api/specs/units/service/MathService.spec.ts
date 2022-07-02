import { MathService } from '../../../src/services/MathService';

describe('MathService', () => {
	let _service: MathService;

	it('Deveria instânciar a classe', () => {
		_service = new MathService();

		expect(_service).toBeTruthy()
	})

	it('Deveria retornar 2, se somado 1 + 1', () => {
		const res = _service.getSum(1, 1)
		expect(res).toBe(2)
	})

	it('Deveria retornar 4, se somado 3 + 1', () => {
		const res = _service.getSum(3, 1)
		expect(res).toBe(4)
	})

	it('O método getSubtract deveria me retornar 1, quando lhe fosse passado x = 2, y = 1', () => {
		const res = _service.getSubtract(2, 1);

		expect(res).toBe(1)
	})
})