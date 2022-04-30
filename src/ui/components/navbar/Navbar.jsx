import React, { useState } from "react";
import './Navbar.css';
import bookOpen from '../../../assets/icons/book-open.svg';
import bookClosed from '../../../assets/icons/book-closed.svg';
import cube from '../../../assets/icons/cube.svg';
import star from '../../../assets/icons/star.svg';
import table from '../../../assets/icons/table.svg';
import TabItem from '../../molecules/tab-item/TabItem';

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

    const handleClick = (index) => {
        console.log('clicked the handleclick function')
        setSelectedTab(index);
    }

    return (
        <div className="navbar row">
            {
                tabData.map((tab, index) => (
                    <TabItem 
                        id={index}
                        iconPath={tab.iconPath}
                        title={tab.title}
                        isSelected={(index === selectedTab ? true : false)}
                        handleClick={handleClick}
                    />
                ))
            }
        </div>
    );
}

export default Navbar;