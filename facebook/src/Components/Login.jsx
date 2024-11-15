import React, { useState } from "react";
import "../Components/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
    } else if (!email.includes("@")) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      alert("Login successful");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>facebook</h1>
        <div className="login-form">
          <p>Log in To Facebook</p>
          <div className="login-inputs">
            <input
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="Login-btn">
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="Forgt">
            <p>
              <a href="">Forgotten account? Sign up for Facebook</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
