import { createSlice } from "@reduxjs/toolkit";
/** 파일 정리: 
 * name: 별칭
 * initialState: {
 * state1: ...,
 * state2: ..., ....
 * },
 * reducers : {
 *  함수: (state, action)
 * },
 * extraReducers: {
 *  Ajax처리
 * }
 * 
 * export const {함수1, 함수2, ...} = 객체명.actions
 * export default 객체명.reducer
 * 작동 순서: initalState의 state 들이 함수의 state가 되고 action은 외부에서 값을 action.payload로 받아온다.
 * 함수에서 처리된 값을 return 하여 state 갱신
 * 슬라이스 하나당 하나의 Ajax처리.
 */ 

/**Slice 정의 (Action함수 + Reducer의 개념)*/
const counterSlice = createSlice({
    name: 'counter', // 별칭
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        number: 0 ,
        color: '#000'
    },
    //내부 action 및 동기 action.
    // 상태값을 갱신하기 위한 함수들을 구현
    //컴포넌트에서 이 함수들을 호출할 때 전달되는 파라미터는 action.payload로 전달된다.
    //initialState와 동일한 구조의 JSON을 리턴한다
    reducers: {
        plus: (state, action) => {
            const numbervalue = state.number + action.payload; // Counter에서 5를 받아오므로 action.payload는 5가 된다
            let colorValue = "#000"

            if (numbervalue > 0) {
                colorValue = '#2f77eb'
            } else if (numbervalue < 0) {
                colorValue = "#f60";
            }
            // return할 상태값은 initailState와 같아야한다.
            return { number: numbervalue, color: colorValue };
        },
        minus: (state, action) => {
            const numbervalue = state.number - action.payload; //Counter에서 3을 받아오므로 action.payload는 3이 된다.
            let colorValue = "#000"

            if (numbervalue > 0) {
                colorValue = '#2f77eb'
            } else if (numbervalue < 0) {
                colorValue = "#f60";
            }
            // return할 상태값은 initailState와 같아야한다.
            return { number: numbervalue, color: colorValue };
        }
    },
    // 외부 action 및 비동기 action (Ajax용)
    extraReducers: {
        //.. 여기서는 사용 안함
    }
});
// 액션함수들 내보내기
export const { plus, minus } = counterSlice.actions;

// 리듀서 객체 내보내기
export default counterSlice.reducer;