async function getPokemons(callback) {
	//Utilizando Async/Await
	const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
	const data = await reponse.json();
	callback(data.results);

	//Usando Promises
	// fetch('https://pokeapi.co/api/v2/pokemon/')
	// 	.then((response) => {
	// 		return response.json();
	// 	}).then((json) => {
	// 		callback(json.results)
	// 	}).catch((err) => {
	// 		console.log('Erro: ' + err)
	// 	});

	//Simulando Callback
	// setTimeout(() => {
	// 	const pokemons = [{
	// 		"name": "bulbasaur",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/1/"
	// 	},
	// 	{
	// 		"name": "ivysaur",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/2/"
	// 	},
	// 	{
	// 		"name": "venusaur",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/3/"
	// 	},
	// 	{
	// 		"name": "charmander",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/4/"
	// 	},
	// 	{
	// 		"name": "charmeleon",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/5/"
	// 	},
	// 	{
	// 		"name": "charizard",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/6/"
	// 	},
	// 	{
	// 		"name": "squirtle",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/7/"
	// 	},
	// 	{
	// 		"name": "wartortle",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/8/"
	// 	},
	// 	{
	// 		"name": "blastoise",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/9/"
	// 	},
	// 	{
	// 		"name": "caterpie",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/10/"
	// 	},
	// 	{
	// 		"name": "metapod",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/11/"
	// 	},
	// 	{
	// 		"name": "butterfree",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/12/"
	// 	},
	// 	{
	// 		"name": "weedle",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/13/"
	// 	},
	// 	{
	// 		"name": "kakuna",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/14/"
	// 	},
	// 	{
	// 		"name": "beedrill",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/15/"
	// 	},
	// 	{
	// 		"name": "pidgey",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/16/"
	// 	},
	// 	{
	// 		"name": "pidgeotto",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/17/"
	// 	},
	// 	{
	// 		"name": "pidgeot",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/18/"
	// 	},
	// 	{
	// 		"name": "rattata",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/19/"
	// 	},
	// 	{
	// 		"name": "raticate",
	// 		"url": "https://pokeapi.co/api/v2/pokemon/20/"
	// 	}];
	// 	callback(pokemons); //garante que a função só será executada após 2s
	// }, 2000);
}

getPokemons((pokes) => {
	//tudo aqui será executado dentro da função callback, após 2s
	const poke_name = pokes.map((poke) => poke.name);
	const poke_div = document.querySelector("#pokemon-list");

	//daqui pra baixo é farofa e JS de rua, juro que só segui a aula, não me julguem
	for (poke of poke_name) {
		poke_div.innerHTML += `<p>${poke}</p>`;
	}

})

function pedirPizza(callback) {
	setTimeout(() => {
		console.log(`Minha pizza está pronta.`);
		callback();
	}, 4000);
}

function comerPizza(callback) {
	setTimeout(() => {
		console.log('Acabaram de comer. Vamos para o show.');
		callback();
	}, 2000);
}

function pedirUber(destino, callback) {
	setTimeout(() => {
		console.log(`O Uber chegou, vamos para ${destino}!`);
		callback();
	}, 3000);
}

function viajarAteShow(callback) {
	setTimeout(() => {
		console.log('Chegamos, vamos aproveitar o show!');
		callback();
	}, 5000);
}

function ficarDoidaoNoShow(callback) {
	setTimeout(() => {
		console.log('O show acabou, vamos embora!');
		callback();
	}, 2000);
}

function irParaCasa() {
	setTimeout(() => {
		console.log('Cheguei em casa. A mimir...');
	}, 3000);
}

// Callback HELL!!!!!!!
pedirPizza(() => {
	comerPizza(() => {
		pedirUber("o show", () => {
			viajarAteShow(() => {
				ficarDoidaoNoShow(() => {
					pedirUber("a casa", () => {
						irParaCasa();
					});
				});
			});
		});
	});
});