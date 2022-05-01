import { createSlice } from "@reduxjs/toolkit";
import { defunktProfile } from '../../data/github';

console.log('THE DEFUNKT PROFILE IN PROFILE SLICE IS: ', defunktProfile);

export const profileSlice = createSlice({
    name: 'profile',
    initialState: defunktProfile,
    reducers: {
        fetchProfile: (state, action) => {
            // console.log('THE ACTION IN PROFILE SLICE IS: ', action);
            return action.payload;
        },
        updateProfile: (state, action) => {
            return state;
        }
    }
});

export const { fetchProfile, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;