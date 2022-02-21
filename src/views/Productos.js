import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import fs from "../firebase/firebaseConfig";
const Productos = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await fs.collection("Productos").get();
    const productsArray = [];
    for (var snap of products.doc) {
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
    <div>
      <h1 className="h1NavBar">Productos</h1>
      <>
        <Link to="/AddProduct" className="Link btnAddProduct">
          <Button variant="primary" type="submit">
            Añadir Producto
          </Button>
        </Link>
      </>
      {products.length > 0 && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Productos;
