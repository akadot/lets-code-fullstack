const axios = require("axios");

const instance = axios.create({
	baseURL: "http://localhost:3000"
})

instance.get("/heroes")
	.then((res) => {
		let data = res.data;
		for (let index = 0; index < data.length; index++) {
			console.log(res.data[index].nome);
		}
	})

instance.post("/heroes", {
	nome: "Ant-Man",
	identidade: "Hank Pin"
}).then((res) => {
	console.log(res.data)
})

instance.put("/heroes", {
	identidade: "Scott Lang"
}).then((res) => {
	console.log(res.data)
})