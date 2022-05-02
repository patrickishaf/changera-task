import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './slices/profile-slice';
import reposReducer from './slices/repos-slice';
import { githubApi } from "../services/api-service";
import { githubAuthApi } from "../services/auth-api-service"
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        repos: reposReducer,
        profile: profileReducer,
        [githubApi.reducerPath]: githubApi.reducer,
        [githubAuthApi.reducerPath]: githubAuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        githubApi.middleware,
        githubAuthApi.middleware
    ]),
});

setupListeners(store.dispatch);

export default store;