import React from 'react';
import Badge from '../../atoms/badge/Badge';
import TabUnderline from '../../atoms/tab-underline/TabUnderline';
import './TabItem.css';

function TabItem({iconPath, title, isSelected=false, count=123}) {
    return (
        <div className='column tab-item'>
            <div className='row tab-item-content'>
                <img className='tab-icon' src={iconPath} alt="tab icon" />
                <div className="spacing"/>
                {
                    isSelected ? <p><strong>{title}</strong></p> : <p>{title}</p>
                }
                {
                    count > 0 && <div className="row">
                        <div className="spacing"/>
                        <Badge count={count}/>
                    </div> 
                }
            </div>
            {
                isSelected && <TabUnderline/>
            }
        </div>
    )
}

export default TabItem;