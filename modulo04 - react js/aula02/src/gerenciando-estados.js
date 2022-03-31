import React, { useState } from 'react'

export default function useCount() {

	const [count, setCount] = useState(0);

	function handleIncrement() {
		setCount(count + 1);
	}

	function handleDecrement() {
		setCount(count - 1);
	}

	function handleSum10() {
		setCount(count + 10);
	}
	function handleSub10() {
		setCount(count - 10);
	}

	const estado = count > 10 ? "Acima do Permitido." : count < 0 ? "Abaixo do Permitido." : "Dentro do Permitido.";

	const cor = count > 10 ? "red" : count < 0 ? "blue" : "green";

	//Professor
	// const mensagemDeValorAlto = (
	//   <>
	//     <span style={{ color: "blue" }}>Valor muito alto</span>
	//     <br />
	//   </>
	// );

	// {count >= 10 && mensagemDeValorAlto}
	//     {count < 0 && (
	//       <>
	//         <span style={{ color: "red" }}>Valor muito baixo</span>
	//         <br />
	//       </>
	//     )}

	return (
		<>
			<button onClick={handleIncrement}>Incrementar Valor (+ 1)</button>
			<br />
			<br />
			<button onClick={handleSum10}>Incrementar Valor em 10 (+ 10)</button>
			<p style={{ color: cor }}>Valor: {count}</p>
			{/* count > 10 && <p>Muito Alto.</p>     -  se o primeiro item for verdadeiro executa o segundo*/}
			{/* let valor = e && e.tagert && e.target.value    - armazena o último valor, seguindo a lógica dos outros serem verdadeiros*/}
			<p style={{ color: cor }}>Estado: {estado}</p>
			<button onClick={handleSub10}>Decrementar Valor em 10 (- 10)</button>
			<br />
			<br />
			<button onClick={handleDecrement}>Decrementar Valor (- 1)</button>
		</>
	);
}