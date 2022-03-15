import "../App.css";
import React, { useState, useEffect } from "react";
import { auth, fs } from "../firebase/firebaseConfig";
import NavBar from "../components/NavBar/NavBar";
import CartProducts from "../components/CartProducts";
import { CartButtons } from "../components/CartButtons";

const CartWidget = () => {
  //Get Current User - Signup, Login, etc.
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser;

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart" + user.uid).onSnapshot((snapshot) => {
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        });
      } else {
        console.log("user is not signed");
      }
    });
  }, []);

  // console.log(cartProducts);

  let Product;
  const cartProductIncrease = (cartProduct) => {
    Product = cartProduct;
    Product.qty = Product.qty + 1;
    Product.TotalProductPrice = Product.qty * Product.price;
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart" + user.uid)
          .doc(cartProduct.ID)
          .update(Product)
          .then(() => {
            console.log("Increment added");
          });
      } else {
        console.log("user is not logged to increment");
      }
    });
  };

  const cartProductDecrease = (cartProduct) => {
    Product = cartProduct;
    if (Product.qty > 1) {
      Product.qty = Product.qty - 1;
      Product.TotalProductPrice = Product.qty * Product.price;
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart" + user.uid)
          .doc(cartProduct.ID)
          .update(Product)
          .then(() => {
            console.log("Decrement added");
          });
      } else {
        console.log("user is not logged to Decrement");
      }
    });
  };
  return (
    <>
      <NavBar user={user} />
      <h1 className="h1NavBar">Mi Carrito</h1>
      <CartButtons />
      {cartProducts.length > 0 && (
        <div>
          <div className="CartContainer">
            <CartProducts
              cartProducts={cartProducts}
              cartProductIncrease={cartProductIncrease}
              cartProductDecrease={cartProductDecrease}
            />
          </div>
        </div>
      )}
      {cartProducts.length < 1 && (
        <div className="EmptyCart">Tu carrito esta vacío</div>
      )}
    </>
  );
};

export default CartWidget;
