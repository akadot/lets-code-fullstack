function Saudacao(props) {
	const { sujeito, cor, onClick } = props;

	return (
		<h1 style={{ color: cor }} onClick={onClick}>
			Olá {sujeito}
		</h1>
	);
}

export { Saudacao };
