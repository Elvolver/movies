import {createSlice} from '@reduxjs/toolkit'
import {fetchMovies} from "./moviesThunk";

const initialState = {
    status: 'idle',
    movies: [],
    count: 0,
    isLoading: true,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
                state.isLoading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload.movies;
                state.count = action.payload.count;
                state.isLoading = false;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = 'failed';
                state.isLoading = false;
            })
        ;
    },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;