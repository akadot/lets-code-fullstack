import Button from './components/button'
import Square from './components/square'
import Pokemon from './components/pokemon'
import Clark from './components/clark'

function App() {
  return (
    <>
      {/* Childrens */}
      <Button label="test msg">
        Botão de teste
      </Button>

      <br />

      <Square color="blue">
        Blue Box
      </Square>

      <Square color="orange">
        Orange Box
      </Square>

      <Square color="green">
        Green Box
      </Square>

      <br />

      {/* useEffect */}
      <Pokemon />

      <Clark />
    </>
  );
}

export default App;
