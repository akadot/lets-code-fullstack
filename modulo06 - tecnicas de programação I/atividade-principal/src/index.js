const http = require("http");
const getRoute = require("./routes");

const server = http.createServer((req, res) => {
	getRoute(req, res);
});

server.listen(8080, 'localhost', () => {
	const address = server.address();
	console.log(`Servidor rodando ${address.address}:${address.port}`);
});