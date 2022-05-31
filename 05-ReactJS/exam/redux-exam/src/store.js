import { configureStore } from "@reduxjs/toolkit";
import newsListSlice from "./slice/newsListSlice";
const store = configureStore({
    reducer: {
        newsList: newsListSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store;