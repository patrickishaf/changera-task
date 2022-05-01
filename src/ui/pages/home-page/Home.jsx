import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileDrawer from "../../components/profile-drawer/ProfileDrawer";
import SearchComponent from "../../molecules/search-component/SearchComponent";
import './Home.css';
import { repositories, defaultProfile } from '../../../data/data';
import RepositoryTile from "../../molecules/repository-tile/RepositoryTile";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../../redux/slices/profile-slice';
import { useGetProfileQuery } from "../../../services/api-service";

function Home() {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.profile);
    console.log('THE CURRENT PROFILE IN THE HOME COMPONENT IS: ', userProfile);
    const { data, error, isLoading} = useGetProfileQuery('patrickishaf');

    useEffect(() => {
        getProfile(defaultProfile);
    }, []);

    useEffect(() => {
        console.log('THE USER PROFILE AFTER FETCHING IS: ', userProfile);
        console.log('THE USER PROFILE IS NOW ', data);
        getProfile(data);
    }, [userProfile, data]);

    const getProfile = (newProfile) => {
        dispatch(fetchProfile(newProfile));
    }
    return (
        <div>
            <Navbar/>
            <div className="page-body row">
                <ProfileDrawer profile={userProfile}/>
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