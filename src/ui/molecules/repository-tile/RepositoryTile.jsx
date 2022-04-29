import React from "react";
import './RepositoryTile.css';
import LanguageTile from '../../atoms/language-tile/LanguageTile';
import StarTile from "../../atoms/star-tile/StarTile";

function RepositoryTile(props) {
    return (
        <div className="repo-tile row">
            <div className="repo-info">
                <p>{props.name}</p>
                <p>{props.description}</p>
                <div></div>
            </div>
            <div className="repo-actions row">
                <LanguageTile/>
                <StarTile/>
                <p className="last-updated-text">Updated {props.difference} days ago</p>
            </div>
        </div>
    );
}

export default RepositoryTile;