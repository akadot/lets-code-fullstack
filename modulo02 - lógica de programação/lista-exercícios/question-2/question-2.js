/**
 * Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function novoSalario(val1, val2) {
		if (Number(val1) >= 0 && Number(val2) >= 0) {
			let valorReajuste = Number(val1) * (Number(val2) / 100);
			return [Number(val1) + valorReajuste, valorReajuste];
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const salario = document.querySelector("#input-01").value;
		const reajuste = document.querySelector("#input-02").value;
		const result = document.querySelector("#result");

		let salarioAjustado = novoSalario(salario, reajuste);

		if (salarioAjustado) {
			result.innerHTML = `Seu novo salário é R$ ${salarioAjustado[0]}, com um reajuste de R$ ${salarioAjustado[1]} reais.`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos."
		}
	})
})