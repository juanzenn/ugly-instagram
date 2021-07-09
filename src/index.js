import { StrictMode } from "react";
import ReactDOM from "react-dom";
import AuthProvider from "./context/AuthContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>,
  rootElement
);
