import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/loginSignup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password donot match");
        return;
      }
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/login");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="form">
      <h1>Create Account</h1>
      {error && <p className="error">{error} </p>}
      <input
        className="input"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="submit-btn" onClick={createAccount}>
        Create Account
      </button>
      <Link to="/login" className="link">
        Already have an account? login
      </Link>
    </div>
  );
};

export default CreateAccountPage;
