import "./Products";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Icon from "react-icons-kit";
import { arrows_slim_left } from "react-icons-kit/linea/arrows_slim_left";
import { arrows_slim_right } from "react-icons-kit/linea/arrows_slim_right";

export const CartButtons = () => {
  return (
    <div className="containerCartButtons">
      <Link className="ContinuarCompra" to="/productos">
        <Button variant="secondary">
          Continuar comprando
          <Icon icon={arrows_slim_left} size={30} />
        </Button>
      </Link>
      <Link className="FinalizarCompra" to="/">
        <Button variant="secondary">
          <Icon icon={arrows_slim_right} size={30} />
          Finalizar compra
        </Button>
      </Link>
    </div>
  );
};
