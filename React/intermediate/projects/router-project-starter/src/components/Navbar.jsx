import React from "react";
import Logo from "../assets/Logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Navbar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  function clickHandler() {
    toast.success("LoggedOut Sucessfully");
    setLoggedIn(false);
    navigate("/login");
  }
  return (
    <div>
      <nav>
        <img src={Logo} alt="Image Not Found" />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Services</NavLink>
          </li>
        </ul>
        <div>
          {!loggedIn && (
            <button>
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
          {!loggedIn && (
            <button>
              <NavLink to="/signup">Signup</NavLink>
            </button>
          )}
          {loggedIn && (
            <button>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </button>
          )}
          {loggedIn && <button onClick={clickHandler}>Logout</button>}
        </div>
      </nav>
    </div>
  );
};
