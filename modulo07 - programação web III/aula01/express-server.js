const express = require("express");
const app = express()
const router = require("./router");

app.use(express.text()) //para que o express entenda text

//MIDDLEWARE - roda antes da rota/função da rota (usado para autenticação, etc)
app.use('/', (req, res, next) => {
	console.log('passei pelo middleware');
	req.createdAt = new Date().toISOString();
	next(); //permite passar para o resto do código
})

app.get("/", (req, res) => {
	res.send("Olá do express")
})

app.post("/", (req, res) => {
	res.send(`Olá do express - POST (created at: ${req.createdAt})`)
})

app.use("/veiculos", router) //use o arquivo router para tudo que vier em /veiculos

app.use("*", (req, res) => {
	res.send("Não há mapeamentos para essa rota.") //para todas as demais rotas sem mapeamentos
})

app.listen(3000)