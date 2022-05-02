import { createSlice } from "@reduxjs/toolkit"
import { defunktRepositories } from '../../data/github';

// console.log('THE REPOSITORIES IN THE REPOS SLICE ARE: ', defunktRepositories);

export const reposSlice = createSlice({
    name: 'repos',
    initialState: defunktRepositories,
    reducers: {
        fetchRepos: (state, action) => {
            return state;
        },
        updateRepos: (state, action) => {
            // console.log('THE ACTION IN REPOS SLICE IS: ', action);
            // console.log('THE REPOS IN REPOS SLICE ARE ', action.payload);
            return action.payload;
        },
        filterRepos: (state, action) => {
            return state;
        },
    }
});

export const { fetchRepos, updateRepos, filterRepos } = reposSlice.actions;

export default reposSlice.reducer;