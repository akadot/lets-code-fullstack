const Connection = require("./Connection.js");

const server = new Connection();

server.createConnection();

server.connect.on('error', (err) => {
	console.log(`server error: ${err}`);
	server.connect.close();
});

server.connect.on('message', (buffer, rinfo) => {
	const msg = buffer.toString();
	const address = server.connect.address();

	console.log(`[${rinfo.address}:${rinfo.port}]: ${msg}`);
	server.terminal.question(`[${address.address}:${address.port}]`, (answer) => {
		server.connect.send(answer, rinfo.port, rinfo.address);
	})
});

server.connect.on('listening', () => {
	const address = server.connect.address();
	console.log(`Servidor rodando ${address.address}:${address.port}.`);
});

server.connect.bind(8080);