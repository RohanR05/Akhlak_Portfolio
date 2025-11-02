import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/Loading/Loading";

const Root = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen-2xl mx-auto bg-neutral min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
