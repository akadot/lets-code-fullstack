/**
 * Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em um vetor. 
 * Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, 
 * se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");
	const label = document.querySelector("label");
	const result = document.querySelector("#result");
	const selectedNames = document.querySelector("#names-data");

	let nameData = [];

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		if (nameData.length <= 9) {
			adicionarNomes();
		} else {
			buscaNome();
		}
	})

	function adicionarNomes() {
		const nameInput = document.querySelector("#input-01");

		let conditions = typeof nameInput.value == "string" && nameInput.value;

		if (conditions) {
			nameData.push(nameInput.value);
			let spanName = document.createElement("span");
			spanName.innerHTML = nameInput.value;
			selectedNames.appendChild(spanName);

			nameInput.value = "";
			nameInput.focus();
			result.innerHTML = "";
			if (nameData.length == 10) {
				label.innerHTML = "Digite um Nome para Pesquisar";
				calcBtn.innerHTML = "Pesquisar";
			}
			return nameData;
		} else {
			result.innerHTML = "Valor inválido ou nulo.";
		}
	}

	function buscaNome() {
		const nameInput = document.querySelector("#input-01");

		let conditions = typeof nameInput.value == "string" && nameInput.value;

		if (conditions) {
			if (nameData.includes(nameInput.value)) {
				result.innerHTML = `O nome ${nameInput.value} foi encontrado na posição ${nameData.indexOf(nameInput.value) + 1}.`;
			} else {
				result.innerHTML = `O nome ${nameInput.value} não foi encontrado.`;
			}
		} else {
			result.innerHTML = "Valor inválido ou nulo.";
		}
	}
});