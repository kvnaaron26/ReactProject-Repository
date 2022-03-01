import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8Bo-Y3VxGuWXw665se5hsU9v6_CKSPIE",
  authDomain: "mi-app-react-260201.firebaseapp.com",
  projectId: "mi-app-react-260201",
  storageBucket: "mi-app-react-260201.appspot.com",
  messagingSenderId: "792093794395",
  appId: "1:792093794395:web:bf3fb5dfbd6f10b31e1f7e",
  measurementId: "G-44LXCCBP3W",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const fs = firebase.firestore();
const storage = firebase.storage();

// // Use these for db & auth
const auth = firebase.auth();

export { analytics, fs, storage, auth };
