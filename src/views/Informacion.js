import "../App.css";
import React, { useState, useEffect } from "react";
import { auth, fs } from "../firebase/firebaseConfig";
import NavBar from "../components/NavBar/NavBar";

const Informacion = () => {
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
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart" + user.uid).onSnapshot((snapshot) => {
          const qty = snapshot.docs.length;
          setTotalProducts(qty);
        });
      }
    });
  });

  return (
    <>
      <NavBar user={user} totalProducts={totalProducts} />
      <div>
        <h1 className="h1NavBar">Información</h1>
        <p className="infoAtico">
          Atico es un ecommerce de procedencia chilena con presencia en 3
          países, el objetivo es la compra y venta de productos y servicios para
          el consumidor, la mision es lograr en un año tener presencia en mas de
          10 países y ser reconocidos a nivel mundial. Nos comprometemos a
          entregar una excelente calidad en nuestros productos y herramientas
          para que sigas buscando tu producto ideal.
        </p>
      </div>
    </>
  );
};

export default Informacion;
