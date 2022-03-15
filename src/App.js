import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import AddProduct from "./components/AddProduct";

//Views
import Home from "./views/Home";
import Productos from "./views/Productos";
import Informacion from "./views/Informacion";
import Contacto from "./views/Contacto";
import CartWidget from "./views/CartWidget";
import SignUpWidget from "./views/SignupLoginWidget/SignUpWidget";
import LoginWidget from "./views/SignupLoginWidget/LoginWidget";
import Error from "./views/Error";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cartwidget" element={<CartWidget />} />
          <Route path="/signupwidget" element={<SignUpWidget />} />
          <Route path="/loginwidget" element={<LoginWidget />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
