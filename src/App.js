import './App.css';
import NavBar from "./components/NavBar";


const name = "Kevin";

function App () {
  return (
    <>
      <NavBar />

      <h1>Hello user: {name}</h1>
    </>
  );
};

export default App;

