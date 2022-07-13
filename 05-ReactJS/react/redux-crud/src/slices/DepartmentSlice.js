import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {pending, fulfilled, rejected} from '../Util';
import {cloneDeep} from 'lodash';

const API_URL = 'http://localhost:3200/department/'
/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("DepartmentSlice/getList"/*별칭 */, async(payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(API_URL, {
            params: {
                query: payload?.query,
                page: payload?.page,
                rows: payload?.rows
            }
        })
    } catch (err) {
        // 에러 발생시 'rejectWithValue()' 함수에 에러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
        result = rejectWithValue(err.response);
    }
    return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk('DepartmentSlice/getItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(`${API_URL}${payload?.deptno}/`);
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk('DepartmentSlice/getItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.post(API_URL, {
            dname: payload.dname,
            loc: payload.loc
        });
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

//
export const putItem = createAsyncThunk('DepartmentSlice/getItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.put(`${API_URL}${payload?.deptno}/`, {
            dname: payload.dname,
            loc: payload.loc
        });
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const deleteItem = createAsyncThunk('DepartmentSlice/getItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.delete(`${API_URL}${payload?.deptno}/`);
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** Slice 정의 (Action함수 + Reducer의 개념) */
const DepartmentSlice = createSlice({
    name: 'department',
    initialState: {
        loading: false,     // 로딩 여부
        data: null,
        error: null         // 에러 정보
    },
    //내부 action 및 동기 action
    reducer: {},
    // 외부 action 및 비동기 action (Ajax용)
    extraReducers: {
        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,

        [getItem.pending]: pending,
        [getItem.fulfilled]: fulfilled,
        [getItem.rejected]: rejected,

        [postItem.pending]: pending,
        [postItem.fulfilled]: (state, {meta, payload}) => {
            // 기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야 한다.)
            const data = cloneDeep(state.data);
            console.log(data);

            // 새로 저장된 결과를 기존 상태값 배열의 맨 앞에 추가한다.
            data.item.unshift(payload.data.item);

            // 기존의 상태값 배열에서 맨 마지막 항목은 삭제한다.
            data.item.pop();

            return {
                data: data,
                laoding: false,
                error: null
            }
        },
        [postItem.rejected]: rejected,

        [putItem.pending]: pending,
        [putItem.fulfilled]: (state, { meta, payload }) => {
            // 기존의 상태값을 복사한다.(원본이 JSON이므로 깊은 복사를 수행해야 한다)
            const data = cloneDeep(state.data);
            console.log(data);

            // 기존의 데이터에서 수정이 요청된 항목의 위치를 검색한다.
            const index = data.item.findIndex(element => element.deptno === parseInt(meta.arg.deptno));

            if (index !== undefined) {
                data.item.splice(index, 1, payload.data.item);
            }

            return {
                data: data,
                loading: false,
                error: null
            }
        },
        [putItem.rejected]: rejected,

        [deleteItem.pending]: pending,
        [deleteItem.fulfilled]: (state, { meta, payload }) => {
            // 기존의 상태값을 복사한다.(원본이 JSON이므로 깊은 복사를 수행해야 한다)
            const data = cloneDeep(state.data);
            console.log(data);

            // 기존의 데이터에서 삭제가 요청된 항목의 위치를 검색한다.
            const index = data.item.findIndex(element => element.deptno === parseInt(meta.arg.deptno));
            console.log('index=' + index);

            // 검색이 되었다면 해당 항목을 삭제한다.
            if (index !== undefined) {
                data.item.splice(index, 1);
            }
            console.log(data);

            return {
                data: data,
                loading: false,
                error: null
            }
        },
        [deleteItem.rejected]: rejected,
    }
})
//리듀서 객체 내보내기
export default DepartmentSlice.reducer;