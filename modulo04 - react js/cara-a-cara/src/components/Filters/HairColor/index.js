import { useState, useRef, useEffect } from "react";

function HairColor({ checkChar, reset }) {
	const [history, setHistory] = useState([]);
	const selectInput = useRef(null);

	useEffect(() => {
		clearHist();
	}, [reset]);

	function clearHist() {
		selectInput.current.removeAttribute("disabled");
		selectInput.current.selectedIndex = 0;
		setHistory([]);
	}

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
			<label htmlFor="hairColor">Cor do Cabelo</label>
			<select defaultValue={"DEFAULT"} name="hairColor" id="hairColor" onChange={event => handleOnChange(event)} ref={selectInput}>
				<option value={"DEFAULT"} disabled> -- Selecione -- </option>
				<option value="Preto">Preto</option>
				<option value="Loiro">Loiro</option>
				<option value="Ruivo">Ruivo</option>
				<option value="Branco">Branco</option>
				<option value="Verde">Verde</option>
				<option value="Azul">Azul</option>
				<option value="Rosa">Rosa</option>
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

export default HairColor;