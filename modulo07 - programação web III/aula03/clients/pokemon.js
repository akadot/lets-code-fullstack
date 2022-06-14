const axios = require("axios").default;

const BASE = 'https://pokeapi.co/api/v2'

async function fetchPokemon(id) {
	const { data } = await axios.get(`${BASE}/pokemon/${id}`);

	return {
		nome: data.name,
		moves: data.moves,
		sprite: data.sprites.front_default,
	}
}

module.exports = { fetchPokemon, };