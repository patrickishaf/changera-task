import React, { useState } from "react";
import './Navbar.css';
import bookOpen from '../../../assets/icons/book-open.svg';
import bookClosed from '../../../assets/icons/book-closed.svg';
import cube from '../../../assets/icons/cube.svg';
import star from '../../../assets/icons/star.svg';
import table from '../../../assets/icons/table.svg';
import TabItem from '../../molecules/tab-item/TabItem';
import { useSelector } from "react-redux";

const tabData = [
    {
        iconPath: bookOpen,
        title: 'Overview'
    },
    {
        iconPath: bookClosed,
        title: 'Repositories'
    },
    {
        iconPath: table,
        title: 'Projects'
    },
    {
        iconPath: cube,
        title: 'Packages'
    },
    {
        iconPath: star,
        title: 'Stars'
    },
]

function Navbar() {
    const [selectedTab, setSelectedTab] = useState(0);
    const numberOfRepos = useSelector((state) => state.profile.public_repos);

    const handleClick = (index) => {
        setSelectedTab(index);
    }

    return (
        <div className="navbar row">
            {
                tabData.map((tab, index) => (
                    <TabItem 
                        key={index}
                        id={index}
                        iconPath={tab.iconPath}
                        title={tab.title}
                        isSelected={(index === selectedTab ? true : false)}
                        handleClick={handleClick}
                        count={numberOfRepos}
                    />
                ))
            }
        </div>
    );
}

export default Navbar;