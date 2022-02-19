import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//Views
import Home from "./views/Home";
import Productos from "./views/Productos";
import Informacion from "./views/Informacion";
import Contacto from "./views/Contacto";
import CartWidget from "./views/CartWidget";
import LoginWidget from "./views/LoginWidget";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ItemDetailContainer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cartwidget" element={<CartWidget />} />
        <Route path="/loginwidget" element={<LoginWidget />} />
      </Routes>
    </Router>
  );
};
export default App;
