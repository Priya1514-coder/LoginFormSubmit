import "./styles.css";
import React, { useState } from "react";

//let name=""
const App = () => {
  const [name, setName] = useState("");
  const [fullName, setfullname] = useState(""); //click on Button Submit setFullname
  const [lastName, setLastname] = useState("");
  const [lastNamenew, setLastNamenew] = useState("");

  const inpVal = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setfullname(name);
    setLastNamenew(lastName);
  };

  const inputEventtwo = (event) => {
    setLastname(event.target.value);
  };
  return (
    <form onSubmit={onSubmits}>
      <div>
        <h1>
          Hello, {fullName} {lastNamenew}{" "}
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inpVal}
          value={name}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your Last Name"
          onChange={inputEventtwo}
        />
        <br />
        <br />
        <button type="submit">Click Me</button>
      </div>
    </form>
  );
};

export default App;
