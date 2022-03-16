import "./Products";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Icon from "react-icons-kit";
import { arrows_slim_left } from "react-icons-kit/linea/arrows_slim_left";

export const CartButtons = () => {
  return (
    <div className="containerCartButtons">
      <Link className="ContinuarCompra" to="/productos">
        <Button className="CartButtons" variant="secondary">
          <Icon className="iconCartButton" icon={arrows_slim_left} size={45} />
          Continuar comprando
        </Button>
      </Link>
    </div>
  );
};
