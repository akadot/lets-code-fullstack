import { useEffect, useState, useRef } from "react";

import Data from '../../database/charData';

import Character from '../../components/Characters'
import GameHeader from "../../components/GameHeader";
import Filters from "../../components/Filters";

import './style.css';

function Game() {
	const [selected, setSelected] = useState({});
	const [database, setDatabase] = useState(Data);
	const [score, setScore] = useState(25);
	const [reset, setReset] = useState(false)
	const filtersChild = useRef(null);

	useEffect(() => {
		startGame();
	}, []);

	function checkChar(itemName, itemValue) {
		if (selected[itemName] === itemValue) {
			const newDatabase = database.filter(item => item[itemName] === itemValue);
			setDatabase(newDatabase)
			return true;
		} else {
			const newDatabase = database.filter(item => item[itemName] !== itemValue);
			setDatabase(newDatabase);
			setScore(score - 1);
			return false;
		}
	}

	function resetGame() {
		startGame();
		setReset(!reset);
	}

	function startGame() {
		setDatabase(Data);
		const selectedChar = database[Math.floor(Math.random() * database.length)];
		setSelected(selectedChar);
		setScore(25);
		console.log(selectedChar);
	}

	function chooseChar(char) {
		if (char === selected) {
			return {
				player: char,
				machine: selected,
				win: true,
				score: score,
			}
		} else {
			return {
				player: char,
				machine: selected,
				win: false,
				score: score,
			}
		}
	}

	return (
		<section className="game-container" ref={filtersChild}>
			<GameHeader reset={resetGame} />
			<Filters checkChar={checkChar} reset={reset} />
			<ul>
				{
					database.map(char => {
						return (
							<Character info={char} key={char.id} chooseChar={chooseChar} />
						)
					})
				}
			</ul>
		</section>
	);
}

export default Game;