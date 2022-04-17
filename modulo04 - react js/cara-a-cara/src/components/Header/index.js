import bg from '../../assets/img/logo.png'

import './style.css'

function Header({ score, reset }) {
	return (
		<header>
			<img src={bg} alt="one piece" />
			<h1>Descubra o personagem que estou pensando.</h1>
			<h2>Sua pontuação atual: {score}</h2>
			<button onClick={reset}>Recomeçar</button>
		</header>
	)
}

export default Header;