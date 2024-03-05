import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Quizs from "./pages/Quizs";
import Courses from "./pages/Courses";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function Routers() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizs" element={<Quizs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
