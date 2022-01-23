import React from "react";
import './App.css';
import NavBar from "./components/NavBar";

const name = "Kevin";

const App = () => {
  return (
    <>
      <NavBar />

      <h1>Hello user: {name}</h1>
    </>
  );
};

export default App;