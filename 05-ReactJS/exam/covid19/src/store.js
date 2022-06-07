import { configureStore } from "@reduxjs/toolkit";
import Covid19Slice from "./slices/Covid19Slice";
const store = configureStore({
    reducer: {
        covidData: Covid19Slice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;