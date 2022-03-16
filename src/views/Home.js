import "../App.css";
import React, { useState, useEffect } from "react";
import { auth, fs } from "../firebase/firebaseConfig";
import logo from "../Images/logo.png";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history("/LoginWidget");
      }
    });
  });
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
      <div className="homeLogoContainer">
        <img className="homeLogo" src={logo} alt="logo" />
        <p className="pAlerta">(Pagina en proceso de construcción)</p>
      </div>
    </>
  );
};

export default Home;
