import React from "react";
const LandingPage = () => {
  return (
    <div>
      <h1 class = "logo" ><img src="/image/logo.jpg" alt=""/>           A perfect Marketplace to Buy high resolution Images</h1>
      
      <div>
      <video src="image/video1.mp4" autoPlay loop muted width="100%" height="100%"></video>
      <h1></h1>
      <button className="btns" buttonStyle= "btn--outline" buttonSize="btn--large">Get Started</button>
      </div>
    </div>
    
  );
};


export default LandingPage;
