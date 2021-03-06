import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import movies from "./slices/moviesSlice";
import people from "./slices/peopleSlice";
import favorites from "./slices/favoritesSlice";

const reducers = combineReducers({
  movies,
  people,
  favorites,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movies", "favorites"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
