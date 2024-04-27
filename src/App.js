import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import AddEntry from "./Screens/AddEntry";
import Profile from "./Components/Profile";


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/add" element={<AddEntry />} />
        {/* <Route
          exact
          path="/profile"
          element={<Profile isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
