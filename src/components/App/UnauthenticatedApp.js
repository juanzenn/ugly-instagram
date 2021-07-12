import { Switch, Link, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import WelcomePage from "../WelcomePage";

function UnauthenticatedApp(props) {
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
          <WelcomePage />
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
}

export default UnauthenticatedApp;
