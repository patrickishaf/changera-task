import { createSlice } from "@reduxjs/toolkit"

export const reposSlice = createSlice({
    name: 'repositories',
    initialState: {},
    reducers: {
        fetchRepos: (repos, action) => {
            return repos;
        },
        updateRepos: (repos, action) => {
            return repos;
        },
        filterRepos: (repos, action) => {
            return repos;
        }
    }
});

export const { fetchRepos, updateRepos, filterRepos } = reposSlice.actions;

export default reposSlice.reducer;