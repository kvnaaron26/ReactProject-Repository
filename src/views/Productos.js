import "../App.css";
import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { auth, fs } from "../firebase/firebaseConfig";
import NavBar from "../components/NavBar/NavBar";

const Productos = (props) => {
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

  function GetUserUid() {
    const [uid, setUserUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserUid(user.uid);
        }
      });
    }, []);
    return uid;
  }

  const uid = GetUserUid();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await fs.collection("products").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  let Product;
  const addToCart = (product) => {
    if (uid !== null) {
      console.log(product);
    } else {
      props.history("/loginwidget");
    }
    Product = product;
    Product["qty"] = 1;
    Product["TotalProductPrice"] = Product.qty * Product.price;
    fs.collection("Cart" + uid)
      .doc(product.ID)
      .set(Product)
      .then(() => {
        console.log("Agregado al Carrito exitosamente.");
      });
  };

  return (
    <>
      <NavBar user={user} />
      {products.length > 0 && (
        <div>
          <h1 className="h1NavBar">Productos</h1>
          <div className="CardContainer">
            <Products products={products} addToCart={addToCart} />
          </div>
        </div>
      )}
      {products.length < 1 && (
        <div className="WaitMsg">Porfavor espere ...</div>
      )}
    </>
  );
};

export default Productos;

{
  /* <Link to="/AddProduct" className="Link btnAddProduct">
  <Button variant="primary" type="submit">
    Añadir Producto
  </Button>
</Link> */
}
