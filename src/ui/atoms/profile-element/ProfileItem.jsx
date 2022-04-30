import React from "react";
import './ProfileItem.css';

function ProfileItem({ iconPath, title }) {
    return (
        <div className="profile-item row">
            <img className="profile-item-icon" src={iconPath} alt="some icon" />
            <p className="profile-item-title">{title}</p>
        </div>
    );
}

export default ProfileItem;