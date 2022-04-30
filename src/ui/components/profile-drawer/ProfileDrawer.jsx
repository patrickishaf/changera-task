import React from 'react';
import './ProfileDrawer.css';
import avatar from '../../../assets/images/coding.jpg'
import group from '../../../assets/icons/group.svg';
import location from '../../../assets/icons/location.svg';
import mail from '../../../assets/icons/mail.svg';
import twitter from '../../../assets/icons/twitter.svg';
import ProfileItem from '../../atoms/profile-element/ProfileItem';

function ProfileDrawer({ profile }) {
    return (
        <aside className='nav-drawer column'>
            <img className='profile-pic' src={avatar} alt="github profile avatar" />
            <div className="column profile-details">
                <p className='profile-name'>{profile.name}</p>
                <p className='profile-username'>{profile.username}</p>
                <button className='follow-btn'>Follow</button>
                <p className='profile-bio'>{profile.bio}</p>
                <div className="following row">
                    <img className='following-icon' src={group} alt="following" />
                    <p className='following-summary'>
                        <span>{profile.followers}</span> followers | <span>{profile.following}</span> following
                    </p>
                </div>
                <div className='profile-items'>
                    <ProfileItem iconPath={location} title={profile.location}/>
                    <ProfileItem iconPath={mail} title={profile.email}/>
                    <ProfileItem iconPath={twitter} title={profile.twitter}/>
                </div>
                {/* {<p className='profile-subheader'>Achievements</p>} */}
            </div>
        </aside>
    );
}

export default ProfileDrawer;