import { useEffect, useState } from "react";

import Data from './database/charData';

import Character from './components/Characters'
import Header from "./components/Header";
import Filters from "./components/Filters";

import './styles/app.css'

function App() {
  const [selected, setSelected] = useState({});
  const [database, setDatabase] = useState(Data);
  const [score, setScore] = useState(0);

  useEffect(() => {
    startGame();
  }, []);

  function checkChar(itemName, itemValue) {
    if (selected[itemName] === itemValue) {
      const newDatabase = database.filter(item => item[itemName] === itemValue);
      setDatabase(newDatabase)
      setScore(score + 10);
      return true;
    } else {
      const newDatabase = database.filter(item => item[itemName] !== itemValue);
      setDatabase(newDatabase);
      setScore(score - 10);
      return false;
    }
  }

  function resetGame() {
    startGame();
  }

  function startGame() {
    setDatabase(Data);
    const selectedChar = database[Math.floor(Math.random() * database.length)];
    setSelected(selectedChar);
    setScore(0);
    // setHistory([]);
    // selectInput.current.removeAttribute("disabled");
    // selectInput.current.selectedIndex = 0;
    console.log(selectedChar);
  }

  function chooseChar(char) {
    if (char === selected) {
      console.log("WINNER!");
    } else {
      console.log("LOSER!");
    }
  }

  return (
    <section className="container">
      <Header score={score} reset={resetGame} />
      <Filters checkChar={checkChar} />
      <ul>
        {
          database.map(char => {
            return (
              <Character info={char} key={char.id} chooseChar={chooseChar} />
            )
          })
        }
      </ul>
      <footer>
        Made with ☕🌻🎧 by dot_.
      </footer>
    </section>
  );
}

export default App;
