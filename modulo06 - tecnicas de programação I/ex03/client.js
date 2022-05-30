const Connection = require("./Connection");

const client = new Connection("client", 8080, "localhost");


client.on('message', (buffer, rinfo) => {
	const msg = buffer.toString();

	console.log(`[--]: ${msg}`);
	terminal.question(`[--]`, (answer) => {
		client.send(answer);
	});
});