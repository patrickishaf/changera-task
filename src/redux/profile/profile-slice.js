import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        fetchProfile: (state, action) => {
            return state;
        },
        updateProfile: (state, action) => {
            return state;
        }
    }
});

export const { fetchProfile, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;