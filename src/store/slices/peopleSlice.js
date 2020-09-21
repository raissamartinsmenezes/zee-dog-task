import { createSlice } from '@reduxjs/toolkit';

const baseUrl = "https://ghibliapi.herokuapp.com/people"

const initialState = {
    peopleList: [],
    isLoading: true,
    error: null,
  };

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        getPeople: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getPeopleSuccess: (state, actions) => {
            state.peopleList = actions.payload;
            state.isLoading = false;
            state.error = null;
        },
        getPeopleFailure: (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        },
    }
});

export const {
    getPeople,
    getPeopleSuccess,
    getPeopleFailure,
} = peopleSlice.actions;

export const fetchPeople = () => async (dispatch) => {
    dispatch(getPeople());
    try {
        const request = await fetch(baseUrl);
        const requestSuccess = await request.json();
        dispatch(getPeopleSuccess(requestSuccess));
    } catch (error) {
        dispatch(getPeopleFailure(error.toString()));
    }
};

export default peopleSlice.reducer;
