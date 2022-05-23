import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getList = createAsyncThunk("newslist/getList", async(payload, {rejectwithValue}) => {
    let result = null
    try {
        result = await axios.get("http://localhost:3001/news")
    } catch(err) {
        result = rejectwithValue(err.response);
    }
    return result;
})

const newsListSlice = createSlice({
    name: 'newsList',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getList.pending]: (state, { payload }) => {
            return { ...state, loading: true}
        },
        [getList.fulfilled]: (state, { payload }) => {
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getList.rejected]: (state, {payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    messsage: payload?.statusText ? payload.statusText : 'Server Error'
                } 
            }
        }
    }
})

export default newsListSlice.reducer