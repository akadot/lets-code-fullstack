import "./styles.css";

import { Saudacao } from "./saudacao";

export default function App() {
  const estiloDoTitulo = {
    color: "red"
  };

  const handleClick = () => {
    console.log("FUI CLICADO");
  };

  return (
    <div className="App">
      <span style={estiloDoTitulo}>Turma 842</span>

      <Saudacao sujeito="Pikachu" cor="red" onClick={handleClick} />
      <Saudacao sujeito="Bulbassauro" cor="blue" onClick={handleClick} />
      <Saudacao sujeito="Charmander" cor="green" />
    </div>
  );
}
