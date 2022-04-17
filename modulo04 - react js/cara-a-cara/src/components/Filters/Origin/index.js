import { useState, useRef } from "react";

function Origin({ checkChar }) {
	const [history, setHistory] = useState([]);
	const selectInput = useRef(null)

	function handleOnChange(event) {
		const name = event.target.name;
		const value = event.target.value
		const result = checkChar(name, value);
		if (result) {
			let attempt = { res: value, verify: "Acertou", color: "#0FFF50" };
			setHistory([...history, attempt]);
			selectInput.current.setAttribute("disabled", "disabled");
		} else {
			let attempt = { res: value, verify: "Errou", color: "#FF3131" };
			setHistory([...history, attempt]);
		}
	}


	return (
		<section className="filter">
			<label htmlFor="origin">Local de Origem</label>
			<select name="origin" id="origin" onChange={event => handleOnChange(event)} ref={selectInput}>
				<option selected disabled> -- Selecione -- </option>
				<option value="East Blue">East Blue</option>
				<option value="West Blue">West Blue</option>
				<option value="North Blue">North Blue</option>
				<option value="South Blue">South Blue</option>
				<option value="Novo Mundo">Novo Mundo</option>
				<option value="Grand Line">Grand Line</option>
			</select>
			<section className="history">
				{
					history.map((item, index) => {
						return (
							<span style={{ backgroundColor: item.color }} key={index}>{item.res} : {item.verify}</span>
						)
					})
				}
			</section>
		</section>
	);
}

export default Origin;