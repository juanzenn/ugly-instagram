import "./global.scss";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContext } from "./context/AuthContext";

const UnauthenticatedApp = ({ user }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <h1>
            A made this change to be able to deploy Welcome to my amazing app.
            Go to login or register to start using it.
          </h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};

const AuthenticatedApp = (props) => {
  const { logout } = useContext(AuthContext);

  function handleClick() {
    logout();
  }

  return (
    <div>
      <h1>Hello my, fellow {props.user.uid}</h1>
      <button onClick={handleClick}>Logout of this amazing app</button>
    </div>
  );
};

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
