import "./NavBar.css";

import { Link } from "react-router-dom";
//Components
import CartWidget from "../../views/CartWidget";
import LoginWidget from "../../views/LoginWidget";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link to="/" className="Link btn">
          Home
        </Link>
        <Link to="./productos" className="Link btn">
          Productos
        </Link>
        <Link to="/informacion" className="Link btn">
          Información
        </Link>
        <Link to="/contacto" className="Link btn">
          Contacto
        </Link>
        <div className="Widgets">
          <Link to="/cartWidget" className="Link CartWidget">
            <CartWidget />
          </Link>
          <Link to="/loginWidget" className="Link LoginWidget">
            <LoginWidget />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
