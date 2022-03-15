import "./SignupLoginWidget.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";

const LoginWidget = () => {
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

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg(
          "Sesión iniciada exitosamente. Serás redireccionado a Home."
        );
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          history("/");
        }, 3000);
      })
      .catch((error) => setErrorMsg(error.message));
  };

  return (
    <>
      <NavBar user={user} />
      <h1 className="h1NavBar">Iniciar Sesión</h1>
      {/* <p className="pAlerta">(Pagina en proceso de construcción)</p> */}
      <div className="container">
        {successMsg && (
          <>
            <div className="success-msg">{successMsg}</div>
            <br></br>
          </>
        )}
        <Form className="loginForm" onSubmit={handleLogin}>
          <Form.Group className="mt-5 mb-4" controlId="formBasicEmail">
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
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="containerSubmit">
            <Button className="btnSubmit" variant="primary" type="submit">
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
        {errorMsg && (
          <>
            <div className="error-msg">{errorMsg}</div>
            <br></br>
          </>
        )}
      </div>
    </>
  );
};
export default LoginWidget;
