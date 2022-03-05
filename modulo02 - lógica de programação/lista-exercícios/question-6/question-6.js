/**
 * Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
 *  
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function verificaNumero(val1) {

		let conditions = Number(val1);

		if (conditions) {
			if (Number(val1) >= 0) {
				return `O valor ${val1} é POSITIVO.`
			} else {
				return `O valor ${val1} é NEGATIVO.`
			}
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const valor = document.querySelector("#input-01").value;

		const result = document.querySelector("#result");

		let verificacao = verificaNumero(valor);

		if (verificacao) {
			result.innerHTML = `${verificacao}`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos.";
		}
	})
})