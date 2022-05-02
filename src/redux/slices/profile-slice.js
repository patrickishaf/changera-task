import { createSlice } from "@reduxjs/toolkit";
import { defunktProfile } from '../../data/github';

// console.log('THE DEFUNKT PROFILE IN PROFILE SLICE IS: ', defunktProfile);

export const profileSlice = createSlice({
    name: 'profile',
    initialState: defunktProfile,
    reducers: {
        updateProfile: (state, action) => {
            return action.payload;
        },
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;