var express = require('express');
const Pokemon = require("../clients/pokemon");
var router = express.Router();

/* GET home page. */
router.get('/:pokeID', async function (req, res, next) {
	const { pokeID } = req.params;
	const pokeInfo = await Pokemon.fetchPokemon(pokeID);

	res.send(pokeInfo);
});

module.exports = router;