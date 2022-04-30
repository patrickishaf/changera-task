import React from "react";
import './RepositoryTile.css';
import LanguageTile from '../../atoms/language-tile/LanguageTile';
import StarTile from "../../atoms/star-tile/StarTile";
import PrivacyChip from "../../atoms/privacy-chip/PrivacyChip";
import dropdown from '../../../assets/icons/dropdown.svg';
import star from '../../../assets/icons/star.svg';

function RepositoryTile(props) {
    return (
        <div className="repo-tile row">
            <div className="repo-info">
                <div className="repo-title row">
                    <p className="repo-name">{props.name}</p>
                    <PrivacyChip value={props.privacy}/>
                </div>
                <p className="repo-description">{props.description}</p>
                <div className="row repo-extra-data">
                    <LanguageTile name="Python"/>
                    <StarTile count={props.numberOfStars}/>
                    <p className="last-updated-text">Updated {props.lastUpdated} days ago</p>
                </div>
            </div>
            <div className="column repo-actions">
                <div className="repo-action-btn row">
                    <div className="repo-action-btn-content row">
                        <img className="star-icon" src={star} alt="star icon" />
                        <p className="repo-action-btn-text">Star</p>
                    </div>
                    <div className="action-dropdown-container">
                        <img className="dropdown-btn-icon" src={dropdown} alt="dropdown button" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepositoryTile;