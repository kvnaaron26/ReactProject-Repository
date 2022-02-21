import "../App.css";
import React from "react";
// import { auth, fs } from "../firebase/firebaseConfig";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SignUpWidget = () => {
  // const history = useNavigate();
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");
  // const [successMsg, setSuccesMsg] = useState("");
  // const handleSignUp = (e) => {
  //   e.preventDefault();
  // auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((credentials) => {
  //     fs.collection("users")
  //       .doc(credentials.user.uid)
  //       .set({
  //         FullName: fullName,
  //         Email: email,
  //         Password: password,
  //       })
  //       .then(() => {
  //         setSuccesMsg(
  //           "Registro Exitoso. Ahora serás redireccionado automáticamente a Iniciar Sesión"
  //         );
  //         setFullName("");
  //         setEmail("");
  //         setPassword("");
  //         setErrorMsg("");
  //         setTimeout(() => {
  //           setSuccesMsg("");
  //           history.push("/LoginWidget");
  //         }, 3000);
  //       })
  //       .catch((error) => setErrorMsg(error.message));
  //   })
  //   .catch((error) => {
  //     setErrorMsg(error.message);
  //   });
  // };

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
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="name"
              placeholder="Ingresa tu nombre completo"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa un correo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
            <Form.Text className="text-muted">
              Nunca compartiremos tu información personal.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Button variant="primary" type="submit">
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
export default SignUpWidget;
