const { readFile, writeFile } = require("../utils/usingFiles");
const generateHTML = require("../utils/generateHTML");

class BillsController {
	index(req, res) {
		return readFile("./src/data/data.json", (data) => {
			res.setHeader("Content-Type", "text/html;charset=utf-8");
			res.writeHead(200);
			const htmlContent = generateHTML(data)
			res.end(htmlContent);
		});
	}

	store(req, res) {
		return readFile("./src/data/data.json", (data) => {
			req.on('data', (newBill) => {
				newBill = JSON.parse(newBill);
				const lastId = data.length;
				newBill.id = lastId + 1;
				data.push(newBill);
				writeFile("./src/data/data.json", JSON.stringify(data));
				res.end("POST Successful!");
			});
		});
	}

	update(req, res) {
		return readFile("./src/data/data.json", (data) => {
			req.on('data', (updateBill) => {
				updateBill = JSON.parse(updateBill);
				const { id } = updateBill;

				const billIndex = data.findIndex((item) => {
					return item.id == id;
				});

				data[billIndex] = {
					id: id,
					name: updateBill.name ? updateBill.name : data[billIndex]["name"],
					value: updateBill.value ? updateBill.value : data[billIndex]["value"],
					expDate: updateBill.expDate ? updateBill.expDate : data[billIndex]["expDate"],
					description: updateBill.description ? updateBill.description : data[billIndex]["description"],
				};

				writeFile("./src/data/data.json", JSON.stringify(data));
				res.end("PUT Successful!");
			});
		});
	}

	delete(req, res) {
		return readFile("./src/data/data.json", (data) => {
			req.on('data', (deleteBill) => {
				deleteBill = JSON.parse(deleteBill);
				const { id } = deleteBill;

				const billIndex = data.findIndex((item) => {
					return item.id == id;
				});

				if (billIndex != -1) {
					data.splice(billIndex, 1);
					writeFile("./src/data/data.json", JSON.stringify(data));
					return res.end("DELETE Successful!");
				}
				res.writeHead(404);
				res.end("ID not found!");
			});
		});
	}
}

module.exports = BillsController;