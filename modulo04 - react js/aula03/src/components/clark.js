import { useEffect, useState } from 'react'

export default function Poke() {
	const [clark, setClark] = useState(null)
	const [name, setName] = useState("")

	useEffect(() => {
		if (name === "Clark Kent") {
			setClark("Super Homem")
		} else {
			setClark(name);
		}

	}, [name])

	return (
		<>
			<h1>{clark}</h1>
			<input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Qual o nome do Super Homem?" />
		</>
	)
}