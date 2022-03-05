/**
 * Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20 números, 
 * o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
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
			addNumber();
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

			if (nameData.length == 20) {
				console.log(nameData)
				let inverse = nameData.reverse();
				result.innerHTML = `A ordem inversa do vetor é: ${inverse.join(" - ")}.`;
			}
		} else {
			result.innerHTML = "Valor inválido ou nulo.";
		}
	}


});