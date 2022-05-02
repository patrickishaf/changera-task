import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileDrawer from "../../components/profile-drawer/ProfileDrawer";
import SearchComponent from "../../molecules/search-component/SearchComponent";
import './Home.css';
import { repositories } from '../../../data/data';
import RepositoryTile from "../../molecules/repository-tile/RepositoryTile";
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../redux/slices/profile-slice';
import { updateRepos, fetchRepos } from "../../../redux/slices/repos-slice";
import { useGetProfileQuery, useGetRepositoriesQuery, useGetUserProfileQuery } from "../../../services/api-service";

function Home() {
    const { data: profileData, error: profileError, isLoading: isLoadingProfile} = useGetProfileQuery('patrickishaf');
    // console.log('PROFILE DATA: ', profileData);
    // console.log('ERROR: ', profileError);
    // console.log('ISLOADING ', isLoadingProfile);
    const { data: repositoryData, error: repositoryError, isLoading: isLoadingRepositories } = useGetRepositoriesQuery('onumengine');
    const { data: authData, error: authError, isLoading: isLoadingAuth } = useGetUserProfileQuery();
    console.log('AUTH DATA: ', authData);
    console.log('AUTH ERROR: ', authError);
    console.log('IS_LOADING AUTH ', isLoadingAuth);
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.profile);
    const userRepos = useSelector((state) => state.repos);

    useEffect(() => {
        // logUserAndRepos();
    }, []);

    useEffect(() => {
        if (profileData) {
            // logUserAndRepos();
            // console.log('PROFILE DATA JUST CHANGED. ITS NEW VALUE IS:', profileData);
            dispatch(updateProfile(profileData));
        }
    }, [profileData]);

    useEffect(() => {
        // logUserAndRepos();
        // console.log('REPOSITORY DATA JUST CHANGED. ITS NEW VALUE IS:', repositoryData);
        dispatch(updateRepos(repositoryData));
    }, [repositoryData]);

    // function logUserAndRepos() {
    //     console.log('PROFILE DATA: ', profileData);
    //     console.log('ERROR: ', profileError);
    //     console.log('ISLOADING ', isLoadingProfile);
    // }

    return (
        (profileError) ? <center>
            <p>Unable to fetch profile: {profileError}...</p>
        </center> : (isLoadingProfile) ? <center>Loading...</center> : <div>
            <Navbar/>
            <div className="page-body row">
                <ProfileDrawer profile={userProfile}/>
                <main onClick={() => dispatch(updateRepos())} className="main-element">
                    <SearchComponent/>
                    <div>
                        {
                            userRepos.filter((repo, index) => index < 20).map((repo, index) => (
                                <RepositoryTile
                                    key={index}
                                    name={repo.name}
                                    description={repo.description}
                                    lastUpdated={repo.lastUpdated}
                                    privacy={repo.privacy}
                                    numberOfStars={1}
                                    language={repo.language}
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