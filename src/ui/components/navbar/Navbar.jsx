import React from "react";
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
    return (
        <div className="navbar row">
            {
                tabData.map(tab => (<TabItem iconPath={tab.iconPath} title={tab.title}/>))
            }
        </div>
    );
}

export default Navbar;