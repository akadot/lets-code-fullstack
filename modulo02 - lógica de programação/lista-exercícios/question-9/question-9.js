/**
 * A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
 * cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, 
 * o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
 * (considere que o mês possua 4 semanas exatas).   
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");

	function calculoHoraExtra(quantidadeHora, valorHora) {

		let conditions = Number(quantidadeHora) >= 0 && Number(valorHora) >= 0;

		if (conditions) {
			let quantidade = Number(quantidadeHora);
			let valor = Number(valorHora);

			if (quantidade > 160) {
				let quantidadeExtra = quantidade - 160;
				let valorExtra = valor + (valor / 2);

				let salarioExtra = (160 * valor) + (quantidadeExtra * valorExtra)

				return salarioExtra;

			} else {
				return valor * quantidade;
			}
		} else {
			return null;
		}
	}

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		const quantidadeHoras = document.querySelector("#input-01").value;
		const valorHoras = document.querySelector("#input-02").value;

		const result = document.querySelector("#result");

		let valorFinal = calculoHoraExtra(quantidadeHoras, valorHoras);

		if (valorFinal) {
			result.innerHTML = `Você fez um total de ${quantidadeHoras - 160} horas extras esse mês.<br/> Seu salário ficou em R$${valorFinal.toFixed(2)}.`;
		} else {
			result.innerHTML = "Um ou ambos os valores são inválidos.";
		}
	})
})