import "./App.css";
import { useState, useEffect } from "react";

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.LastName}</h2>
//       <h2>Age : {props.Age}</h2>
//     </>
//   );
// };
// const App = () => {
//   return (
//     <div className="App">
//       <Person name={"smith"} LastName={"doe"} Age={30} />
//     </div>
//   );
// };

const App = () => {
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    alert("you've changed the counter to" + counter);
  }, [counter]);
  return (
    <div className="App">
      <button onClick={() => setcounter((prevcount) => prevcount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setcounter((prevcount) => prevcount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
