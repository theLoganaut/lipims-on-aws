import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import LoginSignup from "./routes/LoginSignup";
import StorageSolution from "./routes/StorageSolution";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import SecretRoute from "./routes/SecretRoute";
import BusinessManager from "./routes/BusinessManager";
import { RequireAuth } from "./middleware/useAuthHook";
import AuthProvider from "./middleware/AuthContext";
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route
            path="/storageSolution"
            element={
              <RequireAuth>
                {" "}
                <StorageSolution />{" "}
              </RequireAuth>
            }
          />
          <Route path="/secretRoute" element={<SecretRoute />} />
          <Route
            path="/businessManager"
            element={
              <RequireAuth>
                <BusinessManager />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
