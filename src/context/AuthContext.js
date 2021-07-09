import React, { useState, useEffect } from "react";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTuOfFqQu8dMeyef-4o9CgA-9bzZqReA4",
  authDomain: "ugly-instagram.firebaseapp.com",
  projectId: "ugly-instagram",
  storageBucket: "ugly-instagram.appspot.com",
  messagingSenderId: "631427747019",
  appId: "1:631427747019:web:2a1e7ad457c94c69e75f4e",
  measurementId: "G-XBPDDX91ZE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();

  async function registerUser(email, password, confirmPassword) {
    try {
      if (password === confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function loginUser(email, password) {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function logout() {
    try {
      firebase.auth().signOut();
      setUser("");
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthConsumer };

export default AuthProvider;
