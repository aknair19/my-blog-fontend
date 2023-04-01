import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/navbar.css";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
const Navbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/" className="nav-item ">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item ">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" className="nav-item ">
            Articles
          </NavLink>
        </li>
      </ul>

      <div>
        {user ? (
          <button
            className="nav-btn"
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="nav-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
