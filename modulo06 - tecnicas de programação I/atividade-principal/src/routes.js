const BillsControler = require("./controller/BillsController");

const Bills = new BillsControler;

function getRoute(req, res) {
	let { url, method } = req;
	switch (url) {
		case "/":
			if (method == "GET") Bills.index(req, res);
			if (method == "POST") Bills.store(req, res);
			if (method == "PUT") Bills.update(req, res);
			if (method == "DELETE") Bills.delete(req, res);
			break;

		default:
			res.writeHead(404);
			res.end("Page not found!");
			break;
	}
}

module.exports = getRoute;