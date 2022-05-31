import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getList = createAsyncThunk("trafficAccSlice/getList", async(payload, {rejectedWithValue}) => {
    let result = null;
    try {
        result = await axios.get(`http://localhost:3001/traffic_acc`, {
            params: {
                year: payload.year ? payload.year : null,
                month: payload.month ? payload.month : null
            }
        })
    } catch(err) {
        result = rejectedWithValue(err.reponse)
    }
    return result;
})

const trafficAccSlice = createSlice({
    name: 'trafficAcc',
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

export default trafficAccSlice.reducer