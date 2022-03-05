/**
 *  Escreva um algoritmo que imprima a tabuada (de 1 a 10) para os números de 1 a 10. 
 */

function tabuadaUnica(multiplicador) {
	console.log(`Tabuada do ${multiplicador}:`)
	for (let i = 0; i <= 10; i++) {
		console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);
	}
	console.log('-----')
}

function tabuadaCompleta() {
	for (let j = 1; j <= 10; j++) {
		tabuadaUnica(j);
	}
}

(function recebeOpcao() {
	const readline = require("readline").Interface({
		input: process.stdin,
		output: process.stdout
	})
	console.log("TABUADA")
	console.log("Você deseja visualizar a tabuada completa ou selecionar uma específica:")
	readline.question("[0] - Completa \n[1] - Específica \n-> ", tipoTabuada => {
		if (tipoTabuada == 0) {
			tabuadaCompleta()
			console.log("FIM.")
			readline.close()
		} else if (tipoTabuada == 1) {
			readline.question("Selecione o Multiplicador: ", multiplicador => {
				tabuadaUnica(multiplicador)
				console.log("FIM.")
				readline.close()
			})
		} else {
			console.log("Operação Inválida.")
			console.log("FIM.")
			readline.close()
		}

	})

})()
