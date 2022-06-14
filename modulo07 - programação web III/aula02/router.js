const express = require("express");
const router = express.Router();
const db = require("./database/index");

const veiculosData = [
	'uno',
	'celta',
	'monza'
];

const selectByLimit = (array, limits) => array.slice(0, limits);

router.get('/', async (req, res) => {
	const veiculosDB = await db.from('veiculos');
	res.send(veiculosDB)

	// const { nome, limite = veiculosData.length } = req.query;

	// if (nome == undefined) {
	// 	res.send(selectByLimit(veiculosData, limite))
	// } else {
	// 	const veiculoComNomeX = veiculosData.filter(veiculo => veiculo.startsWith(nome));
	// 	const veiculoComNomeXLimitados = selectByLimit(veiculoComNomeX, limite);
	// 	res.send(veiculoComNomeXLimitados)
	// }
})

router.get('/:veiculoID', (req, res) => {
	const { veiculoID } = req.params;
	const numberVeiculoID = Number(veiculoID);

	if (numberVeiculoID <= 0 || numberVeiculoID >= veiculosData.length) {

		res.status(404).send("Veículo não encontrado.")
	} else if (Number.isNaN(numberVeiculoID)) {

		res.status(400).send("ID inválido")
	} else {
		const veiculo = veiculosData[numberVeiculoID];
		res.send(veiculo)
	}
})

router.post('/', (req, res) => {
	const { nomeVeiculo } = req.body;
	veiculosData.push(nomeVeiculo);
	res.status(201).send(nomeVeiculo);
})

router.put('/:veiculoID', (req, res) => {
	const { veiculoID } = req.params;
	const { novoNomeVeiculo } = req.body;
	const numbID = Number(veiculoID);
	veiculosData[numbID] = novoNomeVeiculo
	res.send(novoNomeVeiculo)
})

router.delete('/:veiculoID', (req, res) => {
	const { veiculoID } = req.params;
	const numbID = Number(veiculoID);
	veiculosData.splice(numbID, 1);
	res.status(200).end()
})

module.exports = router