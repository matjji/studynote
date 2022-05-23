import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import counterSlice from "./slices/CounterSlice";
import departmentSlice from "./slices/DepartmentSlice";
const logger = createLogger();
// store를 index.js에서 호출하여 전역변수로 사용하여 데이터를 어디서나 사용할 수 있다.
const store = configureStore({
    reducer: {
        // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
        //별칭: 오브젝트명
        counter: counterSlice,
        department: departmentSlice
    },
    //미들웨어를 사용하지 않을 경우 이 라인 생략 가능 (redux-thunk사용시 필수)
    middleware: [...getDefaultMiddleware({serializablecheck: false}),logger],
    //redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시 안함
    devTools: true
})

export default store;  