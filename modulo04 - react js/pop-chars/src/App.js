import { useState, useEffect } from 'react'

import Data from './database/data'
import Char from './components/char'

import "./styles/app.css"

function App() {
  const [charInfo, setCharInfo] = useState(null);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    const match = Data.filter((item) => item.name === inputName)
    setCharInfo(match[0]);
  }, [inputName]);

  return (
    <>
      <header>
        <h1>Personagens da Cultura Pop</h1>
        <p>Digite o personagem que desejar.</p>
      </header>

      <main>
        <input type="text" placeholder="Nome do Personagem" value={inputName} onChange={event => setInputName(event.target.value)} />
        {/* personagem */}
        {charInfo ? <Char char={charInfo} /> : <h2>O personagem será renderizado aqui.</h2>}
      </main>
    </>
  );
}

export default App;
