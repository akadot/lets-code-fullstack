import { useState } from "react";

import './styles/app.css'

function App() {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");
  const [students, setStudents] = useState([]);
  const [drawn, setDrawn] = useState([]);


  function addStudents(newStudent) {
    if (newStudent !== "") {
      setStudents([...students, newStudent]);
    }
  }

  function handleRemoveStudents(removeIndex) {
    const newStudents = students.filter((_, index) => index !== removeIndex);
    setStudents(newStudents);
  }

  function handleDrawn() {
    if (students.length <= 0) {
      setMsg("Adicione os estudantes antes de sortear.")
      setTimeout(() => {
        setMsg("")
      }, 2000);

    } else {
      const selectedIndex = Math.floor(Math.random() * students.length);
      const selectedStudent = students[selectedIndex];
      setDrawn([...drawn, selectedStudent])
      handleRemoveStudents(selectedIndex)
    }
  }

  function handleClean() {
    setStudents([...students, ...drawn]);
    setDrawn([]);
  }

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleOnClick() {
    addStudents(input);
    setInput("");
  }

  return (
    <section className="container">
      <header>
        <h1>Sorteador de Alunos</h1>
        <p>Adicione os nomes dos alunos e inicie os sorteios.</p>
      </header>

      <main>

        <section className="students-list">
          <input type="text" placeholder="Escreva o nome do aluno" value={input} onChange={handleOnChange} />
          <button onClick={handleOnClick}>Adicionar Alunos</button>
          <p>{msg}</p>
          <ul>
            {
              students.map((student, index) => {
                return (
                  <li key={index}>{student}</li>
                )
              })
            }
          </ul>
        </section>

        <section className="students-drawn">
          <button onClick={handleDrawn}>Sortear Aluno</button>
          <button className="btn-clean" onClick={handleClean}>Limpar Sorteio</button>
          <ul>
            {
              drawn.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
        </section>
      </main>

      <footer>
        <p>Made with ☕🌻🎧 by <a href="https://github.com/akadot" target="_blank" rel="noreferrer">dot_</a></p>
      </footer>

    </section>
  );
}

export default App;
