import { configureStore } from "@reduxjs/toolkit";
import movieRankSlice from "./slice/movieRankSlice";
const store = configureStore({
    reducer: {
        movieRank: movieRankSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;