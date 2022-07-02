import { somar } from './math';

test('Se 1 + 1 é igual a 2.', () => {
	const res = somar(1, 1)
	expect(res).toBe(2)
	expect('').toBe('')
})