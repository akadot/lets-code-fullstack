/**
 * Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function verificaNumero(valor01, valor02) {

		let conditions = Number(valor01) && Number(valor02);

		if (conditions) {
			if (Number(valor01) > Number(valor02)) {
				return valor01
			} else if (Number(valor01) < Number(valor02)) {
				return valor02
			} else {
				return 'Ambos são iguais'
			}
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const valor01 = document.querySelector("#input-01").value;
		const valor02 = document.querySelector("#input-02").value;

		const result = document.querySelector("#result");

		let verificacao = verificaNumero(valor01, valor02);

		if (verificacao) {
			result.innerHTML = `O maior valor lido é: ${verificacao}`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos.";
		}
	})
})