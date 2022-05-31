import { configureStore } from "@reduxjs/toolkit";
import trafficAccSlice from "./slice/trafficAccSlice";
const store = configureStore({
    reducer: {
        trafficAcc: trafficAccSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;