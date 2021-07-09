import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useInput } from "./Register";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChange] = useInput();

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <article>
        <label htmlFor="name">Email: </label>
        <input value={email} onChange={handleEmailChange} type="text" />
      </article>
      <article>
        <label htmlFor="password">Password: </label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
      </article>

      <button type="submit">Login amigo</button>
    </form>
  );
};

export default Login;
