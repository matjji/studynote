import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import newsListSlice from "./slice/newsListSlice";
const logger = createLogger()
const store = configureStore({
    reducer: {
        newsList: newsListSlice
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false}), logger]
})

export default store;