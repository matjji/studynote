import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
const KEY = "e4fba1dfa1a08c5b41edc47ed635968c"

export const getMovieRank = createAsyncThunk("MovieRankSlice/getMovieRank", async(payload, {rejectWithValue}) => {
    let result = null;

    try {
        result = await axios.get(URL, {
            params:{
                key: KEY,
                targetDt: payload.targetDt
            }
        });
        if (result.data.faultInfo !== undefined) {
            const err = new Error();
            err.response = {status: result.data.faultInfo.errorCode, statusText: result.data.faultInfo.message}
            throw err
        }
    } catch(err) {
        result = rejectWithValue(err.response);
    }

    return result;
})

const MovieRankSlice = createSlice({
    name: 'movieRank',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getMovieRank.pending]: (state, { payload }) => {
            return { ...state, loading: true}
        },
        [getMovieRank.fulfilled]: (state, { payload }) => {
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getMovieRank.rejected]: (state, {payload}) => {
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

export default MovieRankSlice.reducer