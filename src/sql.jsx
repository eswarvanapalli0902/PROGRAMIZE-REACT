import React from "react";
import "./Sql.css";

function Sql() {
    return (
        <div className="sql-container">
            <h1 className="sql-title">SQL Fundamentals</h1>
            <p className="sql-description">
                Structured Query Language (SQL) is used to manage and query relational databases — a must-have skill for developers and data analysts.
            </p>

            <div className="sql-topics">
                <h2>Topics You’ll Learn:</h2>
                <ul>
                    <li>🗃️ Creating & Modifying Tables</li>
                    <li>🔍 SELECT, WHERE, ORDER BY</li>
                    <li>🔄 JOINs (INNER, LEFT, RIGHT)</li>
                    <li>📈 GROUP BY & Aggregations</li>
                    <li>🔐 Constraints & Keys</li>
                    <li>📤 INSERT, UPDATE, DELETE</li>
                </ul>
            </div>

            <button className="explore-btn">
                Start Querying
            </button>
        </div>
    );
}

export default Sql;
