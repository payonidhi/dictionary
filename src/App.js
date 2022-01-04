import "./styles.css";
import { useState, useEffect } from "react";

const dictionary = {
  a: "apple",
  b: "ball",
  c: "cat",
  d: "dog"
};

export default function App() {
  const [x, setX] = useState("");
  const [message, setMessage] = useState("");

  const handleclick = (event) => {
    const word = dictionary[x];
    if (word !== undefined) {
      setMessage(`${x} for ${dictionary[x]}`);
    } else {
      setMessage(`Not found in the dictionary`);
    }
  };

  const handleChange = (event) => setX(event.target.value);

  return (
    <div className="App">
      <h1>{x}</h1>
      <input onChange={handleChange} id="test"></input>
      <button onClick={handleclick}> Click Me</button>
      <h2>{message}</h2>
    </div>
  );
}
