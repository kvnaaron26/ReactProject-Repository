import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { auth } from "../firebase/firebaseConfig";
// import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const LoginWidget = () => {
  //   const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const [errorMsg, setErrorMsg] = useState("");
  //   const [successMsg, setSuccesMsg] = useState("");

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  // console.log(email, password);
  //     auth
  //       .signInWithEmailAndPassword(email, password)
  //       .then(() => {
  //         setSuccesMsg("Sesión iniciada exitosamente.");
  //         setEmail("");
  //         setPassword("");
  //         setErrorMsg("");
  //         setTimeout(() => {
  //           setSuccesMsg("");
  //           history.push("/");
  //         }, 3000);
  //       })
  //       .catch((error) => setErrorMsg(error.message));
  //   };

  return (
    <>
      <h1 className="h1NavBar">Registrarse</h1>
      <div className="container">
        {/* {successMsg && (
          <>
            <div className="success-msg">{successMsg}</div>
            <br></br>
          </>
        )} */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu información personal.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Guardar inicio de sesión" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
            <br></br>
            <br></br>
            <Form.Text className="text">
              <span>
                Aún no estás registrado? &nbsp;
                <Link to="/SignUpWidget" className="Link">
                  Registrate Aquí
                </Link>
              </span>
            </Form.Text>
          </Form.Group>
        </Form>
        {/* {errorMsg && (
            <>
              <div className="error-msg">{errorMsg}</div>
              <br></br>
            </>
          )} */}
      </div>
    </>
  );
};
export default LoginWidget;
