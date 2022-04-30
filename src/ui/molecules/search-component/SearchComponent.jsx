import React from "react";
import './SearchComponent.css';
import dropdown from '../../../assets/icons/dropdown.svg';

function SearchComponent() {
    return (
        <div className="row search-component">
            <input className="searchbar" type="text" placeholder="Find a repository..."/>
            <div className="search-comp-spacer"/>
            <button>
                <div className="row dropdown-btn-content">
                    <p className="dropdown-btn-text">Type</p>
                    <img className="dropdown-btn-icon" src={dropdown} alt="dropdown icon" />
                </div>
            </button>
            <div className="spacer-sm"/>
            <button>
                <div className="row dropdown-btn-content">
                    <p className="dropdown-btn-text">Language</p>
                    <img className="dropdown-btn-icon" src={dropdown} alt="dropdown icon" />
                </div>
            </button>
            <div className="spacer-sm"/>
            <button>
                <div className="row dropdown-btn-content">
                    <p className="dropdown-btn-text">Sort</p>
                    <img className="dropdown-btn-icon" src={dropdown} alt="dropdown icon" />
                </div>
            </button>
        </div>
    );
}

export default SearchComponent;