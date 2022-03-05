/**
 * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function verificaNumero(val1) {

		let conditions = Number(val1);

		if (conditions) {
			if (Number(val1) > 10) {
				return `O valor ${val1} é maior que 10.`
			} else {
				return `O valor ${val1} não é maior que 10.`
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