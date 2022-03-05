/**
 * Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
 * Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:
 *
 *      mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5))/10
 *
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function calculaMedia(val1, val2, val3, peso1, peso2, peso3) {

		let conditions = Number(val1) >= 0 && Number(val2) >= 0 && Number(val3) >= 0 && Number(peso1) >= 0 && Number(peso2) >= 0 && Number(peso3) >= 0;

		if (conditions) {
			let mediaFinal = ((val1 * peso1) + (val2 * peso2) + (val3 * peso3)) / 10

			return mediaFinal;
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const nota01 = document.querySelector("#input-01").value;
		const nota02 = document.querySelector("#input-02").value;
		const nota03 = document.querySelector("#input-03").value;
		const result = document.querySelector("#result");

		let valorFinal = calculaMedia(nota01, nota02, nota03, 2, 3, 5);

		if (valorFinal) {
			result.innerHTML = `A média ponderada final é: ${valorFinal}.`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos.";
		}
	})
})