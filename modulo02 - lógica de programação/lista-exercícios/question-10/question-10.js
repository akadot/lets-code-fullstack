/**
 * Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function calculoHoraExtra(valorN) {

		let conditions = Number(valorN) > 0;

		if (conditions) {
			let sequenceN = new Array();
			let N = Number(valorN);
			for (let i = 1; i <= N; i++) {
				sequenceN.push(i)
			}
			return sequenceN.join(" - ");
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const valorN = document.querySelector("#input-01").value;

		const result = document.querySelector("#result");

		let sequencia = calculoHoraExtra(valorN);

		if (sequencia) {
			result.innerHTML = `A sequência obtida é: ${sequencia}.`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos.";
		}
	})
})