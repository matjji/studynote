import { configureStore } from "@reduxjs/toolkit";
import KakaoSlice from "./slice/kakaoSlice";
const store = configureStore({
    reducer: {
        kakao: KakaoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;