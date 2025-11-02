import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";

const Root = () => {
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
