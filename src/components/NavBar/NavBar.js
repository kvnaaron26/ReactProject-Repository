import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

const NavBar = ({ user, totalProducts }) => {
  return (
    <nav className="Navigation">
      <div className="containerLogo">
        <Link to="/">
          <img className="logoNavBar" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="containerList">
        <ul className="List-ul">
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
      </div>
      <div className="containerWidgets">
        {!user && (
          <>
            <Link to="/CartWidget" className="Link btnCartWidget">
              <img
                className="CartWidget"
                src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
              />
            </Link>
            <Link to="/LoginWidget" className="Link btnSignUpWidget">
              <img
                className="SignUpWidget"
                src="https://content.invisioncic.com/p289038/monthly_2021_03/user-symbol-of-thin-outline.png.063bb738759cb9ad420730600f3e4cd6.png"
              />
            </Link>
          </>
        )}
        {user && (
          <>
            <div>
              <Link to="/cartwidget" className="Link btnCartWidget">
                <img
                  className="CartWidget"
                  src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
                />
              </Link>
              <span className="cart-indicator">{totalProducts}</span>
            </div>
            <Link to="/LoginWidget" className="Link btnSignUpWidget">
              <img
                className="SignUpWidget"
                src="https://content.invisioncic.com/p289038/monthly_2021_03/user-symbol-of-thin-outline.png.063bb738759cb9ad420730600f3e4cd6.png"
              />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
