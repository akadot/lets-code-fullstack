const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
	let { url, method } = req;
	console.log({ url, method });

	const spl = url.split("?");
	const param_spl = spl[1];
	let params;

	url = spl[0];

	if (param_spl) {
		params = querystring.parse(param_spl);
		console.log(params)
	}

	if (method == "GET") {
		if (url == '/') {
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.writeHead(200);
			return res.end("Boas Vindas!");
		}

		if (url == '/alunos') {
			res.setHeader('Content-Type', 'application/json;charset=utf-8');
			res.writeHead(200);
			return res.end(JSON.stringify([
				{ nome: 'Zumiro', xp: 1000 },
				{ nome: 'Ziraldo', xp: 500 },
			]))
		}

		if (url == '/teste') {
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			return fs.promises.readFile('./test.html')
				.then((content) => {
					res.writeHead(200);
					res.end(content);
				}).catch((err) => {
					res.writeHead(500);
					console.error(err);
					res.end('Não foi poassível carregar o HTML.');
				})
		}

		if (url == '/teste-simple') {
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			return res.end(`
			<h1>Simple</h1>
			${params ? params.teste : 'No Content'}
			`)
		}
	}
});

// server.on("listening", () => {
// 	const address = server.address();
// 	console.log(`Servidor rodando ${address.address}:${address.port}`);
// });

server.listen(8080, 'localhost', () => {
	const address = server.address();
	console.log(`Servidor rodando ${address.address}:${address.port}`);
});