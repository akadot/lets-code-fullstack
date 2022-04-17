import { Link } from 'react-router-dom'

import crew from '../../assets/img/crew.png';

import './style.css'

function Home() {
	return (
		<section className='home-container'>
			<img src={crew} alt="one piece" />
			<h1>Descubra qual personagem de One Piece estou pensando.</h1>
			<Link to="/game">
				<button>
					Jogar
				</button>
			</Link>
		</section>
	);
}

export default Home;