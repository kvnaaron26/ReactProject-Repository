import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import AddProduct from "./components/AddProduct";

//Views
import Home from "./views/Home";
import Productos from "./views/Productos";
import Informacion from "./views/Informacion";
import Contacto from "./views/Contacto";
import CartWidget from "./views/CartWidget";
import SignUpWidget from "./components/SignupLoginWidget/SignUpWidget";
import LoginWidget from "./components/SignupLoginWidget/LoginWidget";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cartwidget" element={<CartWidget />} />
        <Route path="/signupwidget" element={<SignUpWidget />} />
        <Route path="/loginwidget" element={<LoginWidget />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};
export default App;
