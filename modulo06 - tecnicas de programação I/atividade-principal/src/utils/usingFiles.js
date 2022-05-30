const fs = require("fs");
const path = require("path");

const readFile = (filePath, callback) => {
	return fs.promises.readFile(filePath)
		.then((content) => {
			const ext = path.extname(filePath);
			if (ext == ".json") {
				const data = JSON.parse(content);
				callback(data);
			} else if (ext == ".html" || ext == ".js") {
				callback(content);
			}
		}).catch((error) => {
			console.error(error);
			console.log(`Não foi possível ler o arquivo em ${filePath}.`)
		});
}

const writeFile = (filePath, data) => {
	fs.promises.writeFile(filePath, data);
}

module.exports = { readFile, writeFile };