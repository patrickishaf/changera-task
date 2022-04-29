import React from "react";
import './LanguageTile.css';

function LanguageTile({ name }) {
    return (
        <div className="row">
            <div className="language-color"/>
            <p>{name}</p>
        </div>
    );
}

export default LanguageTile;