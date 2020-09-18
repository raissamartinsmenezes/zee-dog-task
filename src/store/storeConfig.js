import { configureStore, combineReducers } from "@reduxjs/toolkit"

import movies from "./slices/moviesSlice"

const reducer = combineReducers({
  movies,
})

const store = configureStore({
  reducer,
})

export default store
