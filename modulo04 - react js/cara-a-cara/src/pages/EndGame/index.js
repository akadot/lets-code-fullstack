import { useLocation, Link } from 'react-router-dom';

import winImg from '../../assets/img/win.png';
import looseImg from '../../assets/img/loose.png'

import './style.css';

function EndGame() {
	const location = useLocation();
	const { machine, player, win, score } = location.state;

	const color = win ? "#0FFF50" : "#FF3131";

	const imgRes = win ? winImg : looseImg;

	const finalScore = 1000000 * (score / 25)

	return (
		<section className='end-container'>
			<h1 id='res' style={{ color: color }}>{win ? "VENCEU" : "PERDEU"}</h1>
			<section className='results'>
				<section className='poster'>
					<h1>WANTED</h1>
					<img src={player.imgUrl} alt={player.name} />
					<h3>DEAD OR ALIVE</h3>
					<h2>{(player.name).toUpperCase()}</h2>
				</section>
				<section class='res-info'>
					<p id='myChoice'>←Sua escolha</p>
					<img src={imgRes} alt="result" />
					<p id='yourChoice'>Minha escolha→</p>
					<span>Tentativas Falhas: {25 - score}</span>
					<h4>Sua decompensa é de {win ? finalScore : 0} berries.</h4>
				</section>
				<section className='poster'>
					<h1>WANTED</h1>
					<img src={machine.imgUrl} alt={machine.name} />
					<h3>DEAD OR ALIVE</h3>
					<h2>{(machine.name).toUpperCase()}</h2>
				</section>
			</section>
			<Link to="/">
				<button>
					Voltar ao Início
				</button>
			</Link>
		</section>
	);
}

export default EndGame;