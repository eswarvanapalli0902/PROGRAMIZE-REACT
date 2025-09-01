import React from "react";
import { useNavigate } from "react-router-dom";
import "./Python.css";

function Python() {
    const navigate = useNavigate();

    return (
        <div className="python-container">
            <h1 className="python-title">Welcome to Python Learning Hub</h1>
            <p className="python-description">
                Python is a powerful, easy-to-learn programming language used in web development, data science, AI, automation, and more.
            </p>

            <div className="python-topics">
                <h2>Key Topics to Explore:</h2>
                <ul>
                    <li>🧠 Basics & Syntax</li>
                    <li>📦 Modules & Packages</li>
                    <li>🧮 Data Structures</li>
                    <li>🔁 Loops & Conditionals</li>
                    <li>📊 Pandas & NumPy</li>
                    <li>🤖 Machine Learning with scikit-learn</li>
                </ul>
            </div>

            <button className="explore-btn" onClick={() => navigate("/learn/python")}>
                Start Learning
            </button>
        </div>
    );
}

export default Python;
