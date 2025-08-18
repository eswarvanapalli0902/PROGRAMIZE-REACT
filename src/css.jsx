import React from "react";
import "./Css.css";

function Css() {
    return (
        <div className="css-container">
            <h1 className="css-title">CSS Mastery</h1>
            <p className="css-description">
                Cascading Style Sheets (CSS) is the language that brings your HTML to life with color, layout, and animation.
            </p>

            <div className="css-topics">
                <h2>Core Topics to Learn:</h2>
                <ul>
                    <li>🎨 Selectors & Properties</li>
                    <li>📐 Box Model</li>
                    <li>📱 Responsive Design</li>
                    <li>🧭 Flexbox & Grid</li>
                    <li>🌀 Transitions & Animations</li>
                    <li>🌈 Color, Typography & Themes</li>
                </ul>
            </div>

            <button className="explore-btn">
                Start Styling
            </button>
        </div>
    );
}

export default Css;
