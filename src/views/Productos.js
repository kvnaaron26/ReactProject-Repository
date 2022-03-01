import React, { useEffect, useState } from "react";
import Products from "../components/Products";

import { fs } from "../firebase/firebaseConfig";
const Productos = () => {
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

  return (
    <>
      {products.length > 0 && (
        <div>
          <h1 className="h1NavBar">Productos</h1>
          <div className="CardContainer">
            <Products products={products} />
          </div>
        </div>
      )}
      {products.length < 1 && <div>Porfavor espere ...</div>}
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
