import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <img src="./img/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="navManu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quizs">Quizs</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/courses">Courses</NavLink>
        </div>
        <div className="loginSectionBtn">
          <NavLink to="/signup">SignUp</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
