/**
 * Escreva um algoritimo que leia um vetor Q de 20 posições (aceitar somente números positivos). 
 * Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

document.addEventListener("DOMContentLoaded", () => {
	const calcBtn = document.querySelector("#action-btn");
	const result = document.querySelector("#result");
	const selectedNames = document.querySelector("#names-data");

	let nameData = [];

	calcBtn.addEventListener("click", (event) => {
		event.preventDefault();

		if (nameData.length <= 19) {
			let numbers = addNumber();
			let biggest = Math.max(...numbers);
			result.innerHTML = `Maior valor encontrado: ${biggest}. <br/>Na posição: ${numbers.indexOf(biggest) + 1}.`;
		}
	})

	function addNumber() {
		const nameInput = document.querySelector("#input-01");

		let conditions = Number(nameInput.value) >= 0;

		if (conditions) {
			nameData.push(Number(nameInput.value));
			let spanName = document.createElement("span");
			spanName.innerHTML = nameInput.value;
			selectedNames.appendChild(spanName);

			nameInput.value = "";
			nameInput.focus();
			result.innerHTML = "";
			return nameData;
		} else {
			result.innerHTML = "Valor inválido ou nulo.";
		}
	}
});