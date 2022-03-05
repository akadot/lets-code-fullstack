/**
 *  As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. 
 * Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function verificaNumero(quantidade, valor01, valor02) {

		let conditions = Number(quantidade) >= 0;
		let total = 0

		if (conditions) {
			let quantidadeMaca = Number(quantidade)
			if (quantidadeMaca >= 12) {
				total = quantidadeMaca * valor02
				return [total.toFixed(2), valor02.toFixed(2)]
			} else {
				total = quantidadeMaca * valor01
				return [total.toFixed(2), valor01.toFixed(2)]
			}
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const quantidade = document.querySelector("#input-01").value;

		const result = document.querySelector("#result");

		let valorFinal = verificaNumero(quantidade, 1.30, 1.00);

		if (valorFinal) {
			result.innerHTML = `Você comprou ${quantidade} maçãs.
			 <br/> O preço unitário de cada maçã ficou em R$${valorFinal[1]}.
			 <br/> O valor final a ser pago é de R$${valorFinal[0]}.`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos.";
		}
	})
})