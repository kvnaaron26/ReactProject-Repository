import "../App.css";
import React, { useState, useEffect } from "react";
import { auth, fs } from "../firebase/firebaseConfig";
import NavBar from "../components/NavBar/NavBar";

const Contacto = () => {
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
      <div>
        <h1 className="h1NavBar">Contacto</h1>
      </div>
    </>
  );
};

export default Contacto;
