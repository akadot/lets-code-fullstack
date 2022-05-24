//Pegar uma API, acessar e exibir no DOM.

document.addEventListener("DOMContentLoaded", () => {

	const input = document.querySelector("#city-name");
	const btn = document.querySelector("#btn");
	const res = document.querySelector("#res");
	const API_KEY = ""; //se roubar já sabe kkkkkk

	//Async/Await
	async function getWeatherAsync(city, callback) {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br`);

		const jsonData = await response.json();
		callback(jsonData.weather);
	};

	//Promise
	function getWeatherPromise(city, callback) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br`).then((response) => {
			return response.json();
		}).then((json) => {
			callback(json.weather)
		}).catch(err => {
			console.log(err)
		})
	};

	getWeatherAsync('Londres', (weather) => {
		console.log(weather)
	});

	getWeatherPromise('Londres', (weather) => {
		console.log(weather)
	});

	btn.addEventListener("click", () => {
		getWeatherAsync(input.value, (weather) => {
			res.innerHTML = `O clima em ${input.value} está ${weather[0].description}.`;
		});
	})

});

