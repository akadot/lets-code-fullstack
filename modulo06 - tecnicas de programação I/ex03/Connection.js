class Connection {
	constructor(connection, port, host) {
		this.dgram = require("dgram");
		this.readline = require("readline");
		this.connect = this.dgram.createSocket("udp4");
		this.terminal = this.readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		this.type = connection;
		this.port = port;
		this.host = host;
		this.msgHistory = [];
		console.clear();
	}

	on(type, callback = null) {
		this.connect.on(type, (...args) => {
			callback(args);
		});
	}

	listenMessage() { }

	bind() {
		this.connect.bind(this.port);
	}

	send(answer) {
		this.connect.send(answer, this.port, this.connect.address);
	}

	question(msg, callback) {
		this.terminal.question(msg.toString(), (data) => {
			callback(data);
		})
	}
}

module.exports = Connection;