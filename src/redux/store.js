import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice'
import globalReducer from './globalSlice'
import countriesReducer from './countriesSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        global: globalReducer,
        countries: countriesReducer
    },
});

export default store;