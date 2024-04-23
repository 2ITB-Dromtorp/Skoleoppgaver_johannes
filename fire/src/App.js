
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
// import  Quiz from "./quiz";

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
       {/* <Route path="/quiz" element={<Quiz />} /> */}
      </Routes>
    </Router>
  );
}
