import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const response = await axios.get(`https://api.baza.net/portal/countries`);
        return response.data.data;
    }
);