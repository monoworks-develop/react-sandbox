import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={onClick}>+</button>
    </div>
  );
}

export default App;
