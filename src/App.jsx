import { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState(0);

  const addValue = () => {
    if (value < 20) {
      setValue(preValue => preValue + 1);
      setValue(preValue => preValue + 1);
      setValue(preValue => preValue + 1);
      setValue(preValue => preValue + 1);
    } else {
      alert("No more add possible!");
    }
  };

  const removeValue = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      alert("No more remove possible!");
    }
  };

  return (
    <div className="ROOTS">
      <h1 className="heading">Counter Project</h1>
      <h2>Counter value : {value}</h2>

      <button onClick={addValue}>Add value : {value}</button>
      <br />

      <button onClick={removeValue}>Remove value : {value}</button>
      <br />

      <p>footer : {value}</p>
    </div>
  );
}

export default App;
