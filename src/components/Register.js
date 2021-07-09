import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useInput = () => {
  const [inputName, setInputName] = useState("");
  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  return [inputName, handleInputChange];
};

export { useInput };

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChange] = useInput();
  const [confirmPassword, handleConfirmPasswordChange] = useInput();

  function handleSubmit(e) {
    e.preventDefault();
    registerUser(email, password, confirmPassword);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <article>
        <label>Email: </label>
        <input value={email} onChange={handleEmailChange} type="text" />
      </article>
      <article>
        <label>Password: </label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
      </article>
      <article>
        <label htmlFor="password">Repeat password: </label>
        <input
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          type="password"
        />
      </article>

      <button type="submit">Register!!</button>
    </form>
  );
};

export default Register;
