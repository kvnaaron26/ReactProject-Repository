import "../App.css";
import React from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  return (
    <>
      <h1 className="h1NavBar">Añadir Producto</h1>
      <p className="pAlerta">(Pagina en proceso de construcción)</p>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Añade el titulo del producto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripción del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Añade la descripción del producto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu contraseña" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="primary" type="submit">
              Añadir Producto
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
export default AddProduct;
