import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AuthenticatedApp(props) {
  const { user } = props;

  const { logout } = useContext(AuthContext);

  function handleClick() {
    logout();
  }

  return (
    <>
      <h1>Welcome, {user.uid}</h1>

      <button onClick={handleClick}>Logout</button>
    </>
  );
}

export default AuthenticatedApp;
