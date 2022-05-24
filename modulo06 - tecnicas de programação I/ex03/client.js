const Connection = require("./Connection.js");

const client = new Connection();

client.createConnection();

client.terminal.question(`[Boas-vindas]`, (answer) => {
	client.connect.send(answer, 8080, 'localhost');
});

client.connect.on('message', (buffer, rinfo) => {
	const msg = buffer.toString();
	const address = client.connect.address();

	console.log(`[${rinfo.address}:${rinfo.port}]: ${msg}`);
	client.terminal.question(`[${address.address}:${address.port}]`, (answer) => {
		client.connect.send(answer, 5000, 'localhost');
	});
});