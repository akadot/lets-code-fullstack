const express = require("express");
const app = express()
const router = require("./router");

app.use(express.json())

app.use("/veiculos", router) //use o arquivo router para tudo que vier em /veiculos

app.use("*", (req, res) => {
	res.send("Não há mapeamentos para essa rota.") //para todas as demais rotas sem mapeamentos
})

app.listen(8080)