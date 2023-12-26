import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/actors/41">Actors</NavLink>
        </li>
        <li>
          <NavLink to="/movie/48">Movie</NavLink>
        </li>
        <li>
          <NavLink to="/profile/89">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
