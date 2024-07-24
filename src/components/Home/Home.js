import React from "react";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-animation">
        {/* Add your animation here */}
        <img
          src={"https://i.ibb.co/v132Tm5/Medi-ai-icon.png"}
          alt="Legal AI"
          className="logo"
          style={{ width: "440px" }}
        />
        <h1>Meddy</h1>
        <p>
          Answer Medicine and health related questions with Our Azure and SambaNova
          Powered Expert
        </p>
      </div>
    </div>
  );
};

export default HomePage;
