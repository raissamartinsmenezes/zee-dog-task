import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState:  {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95"
    },
    reducers: {}
});

export default moviesSlice.reducer;