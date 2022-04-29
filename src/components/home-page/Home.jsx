import React from "react";
import Navbar from "../navbar/Navbar";
import ProfileDrawer from "../profile-drawer/ProfileDrawer";
import SearchComponent from "../search-component/SearchComponent";
import './Home.css';

function Home() {
    return (
        <div>
            <Navbar/>
            <div>
                <ProfileDrawer/>
                <main>
                    <SearchComponent/>
                    <div>BODY ELEMENT</div>
                </main>
            </div>
        </div>
    );
}

export default Home;