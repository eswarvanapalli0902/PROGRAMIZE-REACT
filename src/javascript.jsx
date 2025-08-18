import React from "react";
import { useNavigate } from "react-router-dom";
import "./JavaScript.css";

function JavaScript() {
    const navigate = useNavigate();

    return (
        <div className="js-container">
            <h1 className="js-title">JavaScript Essentials</h1>
            <p className="js-description">
                JavaScript is the language of the web. Learn how it powers interactivity and logic in modern websites and apps.
            </p>

            <div className="js-topics">
                <h2>Key Concepts to Master:</h2>
                <ul>
                    <li>💡 Variables & Data Types</li>
                    <li>🔁 Loops & Conditions</li>
                    <li>⚙️ Functions & Scope</li>
                    <li>🌐 DOM Manipulation</li>
                    <li>📦 ES6 Features (let, const, arrow functions)</li>
                    <li>🔗 APIs & Fetch</li>
                    <li>📚 Async/Await & Promises</li>
                </ul>
            </div>

            <button className="explore-btn" onClick={() => navigate("/learn/javascript")}>
                Start Learning
            </button>
        </div>
    );
}

export default JavaScript;
