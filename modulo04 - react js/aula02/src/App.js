import "./styles.css";

import ListaDeEstudantes from "./lista-de-estudantes";
import GerenciamentoEstado from './gerenciando-estados'

export default function App() {
  const lista = [
    { nome: "Ash", nota: 10 },
    { nome: "Brock", nota: 2 },
    { nome: "Misty", nota: 8 },
    { nome: "James", nota: 0 }
  ];

  return (
    <>
      <ListaDeEstudantes estudantes={lista} />
      <hr />
      <GerenciamentoEstado />
    </>
  );
}
