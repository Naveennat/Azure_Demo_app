import React from "react";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-animation">
        {/* Add your animation here */}
        <img
          src={
            "https://test.digitalt3.com/wp-content/uploads/2024/08/Medi-ai-icon-1.png"
          }
          alt="Meddy AI"
          className="logo"
          style={{ width: "400px", height: "300px" }}
        />
        <h1>Meddy</h1>
        <p>
          Answer Medicine and health related questions with Our Azure and
          SambaNova Powered Expert
        </p>
        <button
          className="launch-button"
          onClick={() => (window.location.href = "/chat")}
        >
          Launch Now!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
