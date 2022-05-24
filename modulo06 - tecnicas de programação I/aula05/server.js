const http = require("http");
const fs = require("fs");

const readHeroes = (callback) => {
	return fs.promises.readFile('./heroes.json')
		.then((buffer) => {
			const heroes = JSON.parse(buffer);
			callback(heroes);
		}).catch((error) => {
			console.error(error);
			console.log("Não foi possível ler o JSON.")
		});
}

const server = http.createServer((req, res) => {
	const { url, method } = req;


	if (url == "/") {
		if (method == "GET") {
			return readHeroes((heroes) => {

				//Opção 2 de fazer
				// let heroes_list = "";
				// for (let hero of heroes) {
				// 	heroes_list += `<li>${hero.nome} (${hero.identidade})</li>`
				// }

				res.setHeader("Content-Type", "text/html;charset=utf-8");
				res.writeHead(200);

				res.end(`
						<h1>Lista de Super Herois</h1>
						<ul>
							${heroes.data.reduce((prev, curr) => {
					return prev + `<li>${curr.nome} (${curr.identidade})</li>`
				}, "")}
						</ul>
					`);

			});
		}

		else if (method == "POST") {
			return readHeroes((heroes) => {
				req.on('data', (newHero) => {
					newHero = JSON.parse(newHero);
					newHero.id = heroes.lastId + 1;
					heroes.data.push(newHero);
					heroes.lastId = newHero.id;
					fs.promises.writeFile("./heroes.json", JSON.stringify(heroes));
					res.end("POST Successful!")
				});
			})
		}

		else if (method == "PUT") {
			return readHeroes((heroes) => {
				req.on('data', (updateHero) => {
					updateHero = JSON.parse(updateHero);

					const { id, identidade } = updateHero;

					const heroIndex = heroes.data.findIndex((hero) => {
						return hero.id == id;
					});

					heroes.data[heroIndex].identidade = identidade;

					fs.promises.writeFile("./heroes.json", JSON.stringify(heroes));
					res.end("PUT Successful!")
				});
			})
		}

		else if (method == "DELETE") {
			return readHeroes((heroes) => {
				req.on('data', (updateHero) => {
					updateHero = JSON.parse(updateHero);

					const { id } = updateHero;

					// heroes = heroes.filter((hero) => {
					// 	return hero.id != id;
					// });

					const heroIndex = heroes.data.findIndex((hero) => {
						return hero.id == id;
					});

					if (heroIndex != -1) {
						heroes.data.splice(heroIndex, 1);
						fs.promises.writeFile("./heroes.json", JSON.stringify(heroes));
						return res.end("DELETE Successful!")
					}
					res.writeHead(404);
					res.end("ID not found!")


				});
			})
		}
	}

	console.log({ url, method });
	res.writeHead(404);
	return res.end("Page not found!");

});

server.listen(8080, 'localhost', () => {
	const address = server.address();
	console.log(`Servidor rodando ${address.address}:${address.port}`);
});