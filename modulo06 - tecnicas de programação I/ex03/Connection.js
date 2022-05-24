class Connection {
	constructor() {
		this.connect;
		this.terminal;
		this.dgram = require('dgram');
		this.readline = require('readline');
		console.clear();
	}

	createConnection() {
		this.connect = this.dgram.createSocket("udp4");
		this.terminal = this.readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
	}

	// on(type, callback = null) {
	// 	this.connect.on(type, (...args) => {
	// 		callback(args);
	// 	});
	// }

	// bind(port) {
	// 	this.connect.bind(port);
	// }

	// question(msg, callback) {
	// 	this.terminal.question(msg, (data) => {
	// 		callback(data);
	// 	})
	// }
}

module.exports = Connection;