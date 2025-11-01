import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default Root;
