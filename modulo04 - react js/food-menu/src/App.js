import { useState } from 'react'
import './styles/app.css'
function App() {
  const [msg, setMsg] = useState("");
  const [menu, setMenu] = useState([]);
  const [inputDesc, setInputDesc] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [total, setTotal] = useState(null);

  function handleAdd(description, price) {
    if (description !== "" && price > 0) {
      const item = { desc: description, price: Number(price) };
      setMenu([...menu, item])
      const sum = item.price + total;
      setTotal(sum)
      setMsg("");
      setInputDesc("");
      setInputPrice("");
    } else {
      setMsg("Valores Inválidos, Vazios ou Negativos.");
    }
  }

  function handleClean() {
    setMenu([]);
    setTotal(0)
  }

  return (
    <main>
      <header className="input-container">
        <h1>AppFood</h1>
        <section>
          <label htmlFor="description">Descrição</label>
          <input type="text" id="description" value={inputDesc} onChange={event => setInputDesc(event.target.value)} />
        </section>
        <section>
          <label htmlFor="price">Preço</label>
          <input type="number" id="price" value={inputPrice} onChange={event => setInputPrice(event.target.value)} />
        </section>
        <button onClick={() => handleAdd(inputDesc, inputPrice)}>Adicionar</button>
      </header>

      <p id='msg'>{msg}</p>

      <section className='content'>
        <section className="menu-container">
          <section>
            <h1>Menu</h1>
            <button onClick={handleClean}>Limpar Menu</button>
          </section>
          <ul>
            {
              menu.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.desc}</p>
                    <span>R${item.price}</span>
                  </li>
                )
              })
            }

          </ul>
        </section>

        <section className="value-container">
          <h1>Valor</h1>
          <p id='value'>R${total}</p>
        </section>
      </section>
    </main>
  );
}

export default App;
