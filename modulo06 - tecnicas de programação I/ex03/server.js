const Connection = require("./Connection");

const server = new Connection("server", 8080, "localhost");

// Caso a porta não esteja disponível, fechar o servidor
server.on('error', (err) => {
	console.log(`server error: ${err}`);
	server.close();
});

server.on('message', (buffer, rinfo) => {
	const msg = buffer.toString();

	console.log(`[-]: ${msg}`);
	server.question(`[-]`, (answer) => {
		server.send(answer);
	})
});

server.on('listening', () => {
	console.log(`Servidor rodando`);
});

server.bind(8080);

