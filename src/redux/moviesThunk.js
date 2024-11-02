import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
    'operations/fetchOperations',
    async ({ pageSize , offset }) => {
        const response = await axios.get(`https://api.baza.net/portal/movies?limit=${pageSize}&offset=${offset}&order_direction=desc&order=downloads`);
        return response.data.data;
    }
);