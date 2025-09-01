import React from "react";
import "./html.css";

function HTML() {
    return (
        <div className="html-container">
            <h1 className="html-title">HTML Basics</h1>
            <p className="html-description">
                HyperText Markup Language (HTML) is the backbone of the web. It structures content and brings web pages to life.
            </p>

            <div className="html-topics">
                <h2>What You’ll Learn:</h2>
                <ul>
                    <li>🔤 Elements & Tags</li>
                    <li>📄 Page Structure (head, body, etc.)</li>
                    <li>🔗 Links, Images & Media</li>
                    <li>📋 Lists, Tables & Forms</li>
                    <li>⚙️ Semantic HTML</li>
                    <li>🧩 Embedding External Content</li>
                </ul>
            </div>

            <button className="explore-btn">
                Explore HTML
            </button>
        </div>
    );
}

export default HTML;
