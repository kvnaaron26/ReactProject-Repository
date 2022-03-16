import "./Products.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/feather/plus";
import { minus } from "react-icons-kit/feather/minus";
import { auth, fs } from "../firebase/firebaseConfig";

const IndividualCartProduct = ({
  cartProduct,
  cartProductIncrease,
  cartProductDecrease,
}) => {
  const handleCartProductIncrease = () => {
    cartProductIncrease(cartProduct);
  };

  const handleCartProductDecrease = () => {
    cartProductDecrease(cartProduct);
  };
  const handleCartProductDelete = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart" + user.uid)
          .doc(cartProduct.ID)
          .delete()
          .then(() => {
            console.log("eliminado correctamente");
          });
      }
    });
  };
  return (
    <Card className="CartProduct">
      <Card.Img className="CardImg" variant="top" src={cartProduct.url} />
      <Card.Body>
        <Card.Title className="CardTitle">{cartProduct.title}</Card.Title>
        <hr />
        <Card.Text className="product-text description CardDescription">
          <p align="center">{cartProduct.description}</p>
        </Card.Text>
        <hr />
        <Card.Text className="product-text price text-center CardPrice">
          $ {cartProduct.price}
        </Card.Text>
        <hr />
        <span className="CardSpan">Cantidad</span>
        <span className="ItemCounter">
          <Button
            className="ItemCounterBtn"
            onClick={handleCartProductDecrease}
            variant="success"
          >
            <Icon icon={minus} size={15} />
          </Button>
          <div className="CardQtyContainer">
            <div className="CardQty">{cartProduct.qty}</div>
          </div>
          <Button
            className="ItemCounterBtn"
            onClick={handleCartProductIncrease}
            variant="success"
          >
            <Icon icon={plus} size={15} />
          </Button>
        </span>
        <hr />
        <Button className="CardButton btn-md" variant="secondary">
          Ver más detalles
        </Button>
        <span className="CardSpan">Total</span>
        <div className="product-text price text-center CardTotalPrice">
          $ {cartProduct.TotalProductPrice}
        </div>
        <Button
          className="CardButton btn-md btn-danger"
          onClick={handleCartProductDelete}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default IndividualCartProduct;

{
  /* <div className="product">
      <div className="product-img">
        <img src={cartProduct.url} alt="product-img" />
      </div>
      <div className="prouct-text title">{cartProduct.title}</div>
      <div className="product-text description">{cartProduct.description}</div>
      <div className="product-text price">{cartProduct.price}</div>
      <span>Cantidad</span>
      <div className="product-text quantity-box">
        <div className="action-btns minus" onClick={handleCartProductDecrease}>
          <Icon icon={minus} size={20} />
        </div>
        <div>{cartProduct.qty}</div>
        <div className="action-btns plus" onClick={handleCartProductIncrease}>
          <Icon icon={plus} size={20} />
        </div>
      </div>
      <div className="product-text cart-price">
        $ {cartProduct.TotalProductPrice}
      </div>
      <div
        className="btn btn-danger btn-md cart-btn"
        onClick={handleCartProductDelete}
      >
        Eliminar
      </div>
    </div> */
}
