/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
 * Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
 * calcular e escrever o custo final ao consumidor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function novoSalario(val1, distribuidor, impostos) {
		if (Number(val1) >= 0) {
			let porcentagemDistribuidor = Number(val1) * distribuidor / 100;
			let porcentagemImpostos = Number(val1) * impostos / 100;

			let valorFinal = Number(val1) + porcentagemDistribuidor + porcentagemImpostos

			return [valorFinal, porcentagemDistribuidor, distribuidor, porcentagemImpostos, impostos];
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const custosFabrica = document.querySelector("#input-01").value;
		const result = document.querySelector("#result");

		let valorFinal = novoSalario(custosFabrica, 28, 45);

		if (valorFinal) {
			result.innerHTML = `O valor do veículo é R$ ${valorFinal[0]} reais.<br/> 
			Sendo R$${valorFinal[1]} reais em custos ao distribuidor (${valorFinal[2]}%) e R$${valorFinal[3]} reais em impostos (${valorFinal[4]}%).`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos.";
		}
	})
})