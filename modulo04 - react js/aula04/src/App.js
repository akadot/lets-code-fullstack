import { useRef, useState } from 'react'
import Header from "./header";
import ThemeProvider from "./theme-provider";

import './app.css'
function App() {
  const input01 = useRef(null);
  const input02 = useRef(null);
  const input03 = useRef(null);
  const input04 = useRef(null);

  const [i1, setI1] = useState(null);
  const [i2, setI2] = useState(null);
  const [i3, setI3] = useState(null);
  const [i4, setI4] = useState(null);

  function handleChange01(e) {
    setI1(e.target.value);
    input02.current.focus();
  }
  function handleChange02(e) {
    setI2(e.target.value);
    input03.current.focus()
  }
  function handleChange03(e) {
    setI3(e.target.value);
    input04.current.focus()
  }
  function handleChange04(e) {
    setI4(e.target.value);
    input04.current.focus();
  }

  return (
    <main>
      <h1>Token</h1>
      <section className="token">
        <input type="number" ref={input01} value={i1} onChange={e => handleChange01(e)} maxLength={1} max={9} />
        <input type="number" ref={input02} value={i2} onChange={e => handleChange02(e)} maxLength={1} max={9} />
        <input type="number" ref={input03} value={i3} onChange={e => handleChange03(e)} maxLength={1} max={9} />
        <input type="number" ref={input04} value={i4} onChange={e => handleChange04(e)} maxLength={1} max={9} />
      </section>


      <div style={{ height: "100vh" }}>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
        <main>
          <aside />
          <section />
        </main>
      </div>
    </main>
  );
}

export default App;
