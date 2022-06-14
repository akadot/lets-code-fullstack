const http = require("http")

const server = http.createServer((req, res) => {
	res.writeHead(200)
	res.end(JSON.stringify({
		method: req.method,
		url: req.url
	}))
})

server.listen(8080)