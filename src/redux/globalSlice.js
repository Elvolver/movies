import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pageSize: 12,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {},
    extraReducers: () => {
    },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;