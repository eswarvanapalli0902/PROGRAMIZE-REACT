import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Learning Hub</h1>
      <p className="subtitle">Choose a topic to get started:</p>
      <div className="button-container">
        <button onClick={() => navigate("/Python")}>Python</button>
        <button onClick={() => navigate("/JavaScript")}>JavaScript</button>
        <button onClick={() => navigate("/Css")}>CSS</button>
        <button onClick={() => navigate("/HTML")}>HTML</button>
        <button onClick={() => navigate("/Sql")}>SQL</button>
      </div>
    </div>
  );
}

export default Home;
