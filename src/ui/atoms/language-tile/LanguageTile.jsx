import React from "react";
import './LanguageTile.css';

function LanguageTile({ name }) {
    return (
        <div className="lang-tile row">
            <div className="lang-color"/>
            <p className="lang-name">{name}</p>
        </div>
    );
}

export default LanguageTile;