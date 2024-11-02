import {createSlice} from '@reduxjs/toolkit'
import {fetchCountries} from "./countriesThunk";

const initialState = {
    status: 'idle',
    countries: [],
    count: 0,
    isLoading: true,
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading';
                state.isLoading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.countries = action.payload;
                state.count = action.payload.count;
                state.isLoading = false;
            })
            .addCase(fetchCountries.rejected, (state) => {
                state.status = 'failed';
                state.isLoading = false;
            })
        ;
    },
});

export const {} = countriesSlice.actions;

export default countriesSlice.reducer;