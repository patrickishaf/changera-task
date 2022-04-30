import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profile/profile-slice';
import reposReducer from './repos/repos-slice';

export default configureStore({
    reducer: {
        repos: reposReducer,
        profile: profileReducer,
    },
});