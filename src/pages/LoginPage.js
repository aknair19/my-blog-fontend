import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/loginSignup.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="form">
      <h1> Login </h1>

      {error && <p className="error">{error} </p>}
      <input
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        className="input"
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="submit-btn" onClick={login}>
        Login
      </button>
      <Link to="/create-account" className="link">
        Don't have an account? Create one here
      </Link>
    </div>
  );
};

export default LoginPage;
