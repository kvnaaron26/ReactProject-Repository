import "./Products.css";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const IndividualProduct = ({ individualProduct, addToCart }) => {
  const [count, setCounter] = useState(0);
  const handleAddToCart = () => {
    addToCart(individualProduct);
  };
  return (
    <Card className="CardProduct">
      <Card.Img className="CardImg" variant="top" src={individualProduct.url} />
      <Card.Body>
        <Card.Title>{individualProduct.title}</Card.Title>
        <hr />
        <Card.Text className="product-text description CardDescription">
          {individualProduct.description}
        </Card.Text>
        <hr />
        <Card.Text className="product-text price text-center">
          ${individualProduct.price}
        </Card.Text>
        <hr />
        <span className="ItemCounter">
          <Button
            className="ItemCounterBtn btn-md cart-btn add"
            onClick={() => count >= 1 && setCounter(count - 1)}
          >
            -
          </Button>
          <p>{count}</p>
          <Button
            className="ItemCounterBtn btn-md cart-btn remove"
            onClick={() => setCounter(count + 1)}
          >
            +
          </Button>
        </span>
        <Button
          className="btnAddToCart btn-danger btn-md"
          onClick={handleAddToCart}
          variant="primary"
        >
          Añadir al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};
