import { createSlice } from '@reduxjs/toolkit';

const baseUrl = "https://ghibliapi.herokuapp.com/films"

const initialState = {
    moviesList: [],
    isLoading: true,
    error: null,
  };

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getMoviesSuccess: (state, actions) => {
            state.moviesList = actions.payload;
            state.isLoading = false;
            state.error = null;
        },
        getMoviesFailure: (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        },
    }
});

export const {
    getMovies,
    getMoviesSuccess,
    getMoviesFailure,
} = moviesSlice.actions;

export const fetchMovies = () => async (dispatch) => {
    dispatch(getMovies());
    try {
        const request = await fetch(baseUrl);
        const requestSuccess = await request.json();
        dispatch(getMoviesSuccess(requestSuccess.results));
    } catch (error) {
        dispatch(getMoviesFailure(error.toString()));
    }
};

export default moviesSlice.reducer;

