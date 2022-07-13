import { configureStore } from "@reduxjs/toolkit";
import DepartmentSlice from "./slices/DepartmentSlice";

// store를 index.js에서 호출하여 전역변수로 사용하여 데이터를 어디서나 사용할 수 있다.
const store = configureStore({
    reducer: {
        // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
        //별칭: 오브젝트명
        department: DepartmentSlice
    },
    //미들웨어를 사용하지 않을 경우 이 라인 생략 가능 (redux-thunk사용시 필수)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    //redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시 안함
    devTools: true
})

export default store;  