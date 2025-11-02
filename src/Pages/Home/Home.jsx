import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Loading from "../../Components/Loading/Loading";

const Home = () => {

   const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading/>;
  }
  return (
    <div className="">
      <Banner></Banner>
    </div>
  );
};

export default Home;
