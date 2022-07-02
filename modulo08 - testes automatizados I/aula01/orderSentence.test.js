const { splitAndOrder } = require("./orderSentence.js")

test("Deve retornar a frase ordenada pelo ';'.", () => {
	const res = splitAndOrder("banana;cool;apple");
	expect(res).toBe("apple;banana;cool")
});