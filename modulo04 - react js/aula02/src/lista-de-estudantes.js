export default function ListaDeEstudantes({ estudantes }) {

	const somaDasNotas = estudantes.reduce((acc, curr) => {
		return acc + curr.nota;
	}, 0);

	return (
		<section>
			<h1>Temos {estudantes.length} alunos:</h1>
			<h2>Soma das notas: {somaDasNotas}</h2>
			<span></span>
			<ul>
				{estudantes
					.filter((estudante) => estudante.nota >= 5)
					.map((estudante) => {
						return <li>{estudante.nome}</li>;
					})}
			</ul>
		</section>
	);
}
