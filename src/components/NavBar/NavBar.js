import "./NavBar.css";

import { Link } from "react-router-dom";

//Components

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul btnNav">
        <Link to="/" className="Link btnNav">
          Home
        </Link>
        <Link to="/productos" className="Link btnNav">
          Productos
        </Link>
        <Link to="/informacion" className="Link btnNav">
          Información
        </Link>
        <Link to="/contacto" className="Link btnNav">
          Contacto
        </Link>
      </ul>
      <ul className="Widgets">
        <div className="Widgets">
          <Link to="/cartWidget" className="Link btnCartWidget">
            <img
              className="CartWidget"
              src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
            ></img>
          </Link>
          <Link to="/signUpWidget" className="Link btnSignUpWidget">
            <img
              className="SignUpWidget"
              src="https://content.invisioncic.com/p289038/monthly_2021_03/user-symbol-of-thin-outline.png.063bb738759cb9ad420730600f3e4cd6.png"
            ></img>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
