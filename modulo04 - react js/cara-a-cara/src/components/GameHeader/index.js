import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.png'

import './style.css'

function GameHeader({ reset }) {
	return (
		<header>
			<Link to="/">
				<img src={logo} alt="one piece" />
			</Link>
			<h1>Descubra o personagem que estou pensando.</h1>
			<button onClick={reset}>Recomeçar</button>
		</header>
	)
}

export default GameHeader;