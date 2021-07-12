import "./global.scss";
import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UnauthenticatedApp from "./components/App/UnauthenticatedApp";
import AuthenticatedApp from "./components/App/AuthenticatedApp";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {user ? (
        <AuthenticatedApp user={user} />
      ) : (
        <UnauthenticatedApp user={user} />
      )}
    </Router>
  );
}
