import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    tg?.ready();
    tg?.expand();
  }, []);
  return (
    <div style={{ height: "100dvh" }}>
      <h1>HELLO</h1>
      <div style={{ height: "150vh" }}>dfg</div>
    </div>
  );
}

export default App;
