document.addEventListener("DOMContentLoaded", () => {
	const btn = document.querySelector("#action-btn");
	const result = document.querySelector("#result");

	btn.addEventListener("click", (event) => {
		event.preventDefault();
		const carPlate = document.querySelector("#carPlate")
		const carModel = document.querySelector("#carModel")
		const carYear = document.querySelector("#carYear")
		const carKM = document.querySelector("#carKM")
		const driverName = document.querySelector("#driverName")
		const driverLicense = document.querySelector("#driverLicense")

		const pneusState = document.querySelector("input[name='pneus']:checked")
		const latariaState = document.querySelector("input[name='lataria']:checked")
		const lightState = document.querySelector("input[name='light']:checked")
		const gasState = document.querySelector("input[name='gas']:checked")

		let infoConditions = carPlate.value && carModel.value && carKM.value && driverName.value && driverLicense.value;

		let statusConditions = pneusState.value == "ok" && lightState.value == "ok";

		if (infoConditions && statusConditions) {
			//Portaria.autorizar()
			result.innerHTML = `Todos os requisitos foram atendidos. <br/>Boa viagem.`
		} else {
			//AcionarLider.SMS()
			result.innerHTML = `Pendências Encontradas. <br/>O líder do setor está a caminho. <br/>Aguarde`
		}
	})
})