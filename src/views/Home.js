import "../App.css";
import React, { useState, useEffect } from "react";
import { auth, fs } from "../firebase/firebaseConfig";
import logo from "../Images/logo.png";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
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

  return (
    <>
      <NavBar user={user} />
      <div className="homeLogoContainer">
        <img className="homeLogo" src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Home;
