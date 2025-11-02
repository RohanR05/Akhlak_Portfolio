import React from "react";
import Lottie from "lottie-react";
import animi from "../../assets/LoadingHand.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-secondary z-50">
      <Lottie
        animationData={animi}
        loop
        className="w-1/2"
      />
    </div>
  );
};

export default Loading;
