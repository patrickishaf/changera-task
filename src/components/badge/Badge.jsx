import React from "react";
import './Badge.css';

function Badge({ count }) {
    return (
        <div className="badge">{count}</div>
    );
}

export default Badge;