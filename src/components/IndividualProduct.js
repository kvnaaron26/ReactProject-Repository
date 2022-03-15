import "./Products.css";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const IndividualProduct = ({ individualProduct, addToCart }) => {
  const [count, setCounter] = useState(1);
  const handleAddToCart = () => {
    addToCart(individualProduct);
  };
  return (
    <Card className="CardProduct">
      <Card.Img className="CardImg" variant="top" src={individualProduct.url} />
      <Card.Body>
        <Card.Title className="CardTitle">{individualProduct.title}</Card.Title>
        <hr />
        <Card.Text className="product-text description CardDescription">
          <p align="center">{individualProduct.description}</p>
        </Card.Text>
        <hr />
        <Card.Text className="product-text price text-center CardPrice">
          $ {individualProduct.price}
        </Card.Text>
        <hr />
        <span className="ItemCounter">
          <Button
            className="ItemCounterBtn btn-md cart-btn add"
            onClick={() => count >= 1 && setCounter(count - 1)}
            variant="success"
          >
            -
          </Button>
          <div className="CardQtyContainer">
            <p className="CardQty">{count}</p>
          </div>
          <Button
            className="ItemCounterBtn btn-md cart-btn remove"
            onClick={() => setCounter(count + 1)}
            variant="success"
          >
            +
          </Button>
        </span>
        <hr />
        <Button className="CardButton btn-md" variant="secondary">
          Ver más detalles
        </Button>
        <Button
          className="CardButton btn-md"
          onClick={handleAddToCart}
          variant="success"
        >
          Añadir al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default IndividualProduct;
