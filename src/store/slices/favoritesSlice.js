import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addMovieToFavorites: (state, action) => {
            if(state.map((state) => state.id !== action.payload.id)) {
                state.push(action.payload);
            }
        },
        removeMovieFromFavorites: (state, action) => {
            return state.filter((state) => state.id !== action.payload.id);
        },
    }
});

export const {
    addMovieToFavorites,
    removeMovieFromFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
