/**
 * Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function areaCalc(val1, val2) {
		if (Number(val1) >= 0 && Number(val2) >= 0) {
			return Number(val1) * Number(val2);
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();
		const lado01 = document.querySelector("#input-01").value;
		const lado02 = document.querySelector("#input-02").value;
		const result = document.querySelector("#result");

		let areaResult = areaCalc(lado01, lado02);

		if (areaResult) {
			result.innerHTML = `A área resultante é: ${areaResult}`;
		} else {
			result.innerHTML = "Erro. Parâmetros inválidos ou menores que zero."
		}
	})
})