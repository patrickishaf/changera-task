import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileDrawer from "../../components/profile-drawer/ProfileDrawer";
import SearchComponent from "../../molecules/search-component/SearchComponent";
import './Home.css';

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="page-body row">
                <ProfileDrawer/>
                <main className="main-element">
                    <SearchComponent/>
                    <div>BODY ELEMENT</div>
                </main>
            </div>
        </div>
    );
}

export default Home;