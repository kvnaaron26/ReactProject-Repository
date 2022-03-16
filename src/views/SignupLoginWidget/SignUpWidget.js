import "./SignupLoginWidget.css";
import React, { useState, useEffect } from "react";
import { auth, fs } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";

const SignUpWidget = () => {
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

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        fs.collection("users")
          .doc(credentials.user.uid)
          .set({
            FullName: fullName,
            Email: email,
            Password: password,
          })
          .then(() => {
            setSuccessMsg(
              "Registro Exitoso. Ahora serás redireccionado automáticamente a Iniciar Sesión"
            );
            setFullName("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              setSuccessMsg("");
              history.push("/loginwidget");
            }, 3000);
          })
          .catch((error) => setErrorMsg(error.message));
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
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
      <h1 className="h1NavBar">Registrarse</h1>
      <div className="container">
        {successMsg && (
          <>
            <div className="success-msg">{successMsg}</div>
            <br></br>
          </>
        )}
        <Form className="loginForm" onSubmit={handleSignUp}>
          <Form.Group className="mt-5 mb-4" controlId="formBasicFullName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="name"
              placeholder="Ingresa tu nombre completo"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa un correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu información personal.
            </Form.Text>
          </Form.Group>

          <Form.Group className="containerSubmit">
            <Button className="btnSubmit" variant="primary" type="submit">
              Registrarme
            </Button>
            <br></br>
            <br></br>
            <Form.Text className="text">
              <span>
                Ya estás registrado? &nbsp;
                <Link to="/LoginWidget" className="Link">
                  Ingresa Aquí
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
export default SignUpWidget;
