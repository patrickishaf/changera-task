import React from "react";
import './PrivacyChip.css';

function PrivacyChip({ value }) {
    return (
        <div className="privacy-chip row">
            <p>{value}</p>
        </div>
    );
}

export default PrivacyChip;