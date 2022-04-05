import { useEffect, useState } from 'react'

export default function Poke() {
	const [pokemon, setPokemon] = useState(null)
	const [id, setId] = useState(1)

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then(res => res.json())
			.then(poke => setPokemon(poke.name))
	}, [id])

	return (
		<>
			<h1>{pokemon}</h1>
			<input type="number" onChange={e => setId(e.target.value)} value={id} placeholder="Pokemon ID" />
		</>
	)
}