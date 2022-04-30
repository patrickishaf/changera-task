import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileDrawer from "../../components/profile-drawer/ProfileDrawer";
import SearchComponent from "../../molecules/search-component/SearchComponent";
import './Home.css';
import { repositories, profile } from '../../../data/data';
import RepositoryTile from "../../molecules/repository-tile/RepositoryTile";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../../redux/profile/profile-slice';

function Home() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = () => {
        dispatch(fetchProfile());
    }
    return (
        <div>
            <Navbar/>
            <div className="page-body row">
                <ProfileDrawer profile={profile}/>
                <main onClick={() => dispatch(getProfile())} className="main-element">
                    <SearchComponent/>
                    <div>
                        {
                            repositories.map((repo, index) => (
                                <RepositoryTile
                                    key={index}
                                    name={repo.name}
                                    description={repo.description}
                                    lastUpdated={repo.lastUpdated}
                                    privacy={repo.privacy}
                                    numberOfStars={1}
                                />
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;