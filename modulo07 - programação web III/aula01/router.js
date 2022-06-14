const express = require("express")
const router = express.Router();

const veiculosData = [
	'uno',
	'celta',
	'monza'
];

router.get('/', (req, res) => {
	res.send(veiculosData)
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
	res.status(200)
})

module.exports = router