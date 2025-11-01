import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default App;
