import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {CircularProgress, TextField} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const AsynchronousSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const [value, setValue] = React.useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!value?.movie_id) return
        navigate(`/movies/${value.movie_id}`);
    }, [value]);

    useEffect(() => {
        let active = true;
        if (!inputValue) return;

        setLoading(true);

        (async () => {
            try {
                const response = await axios.post('https://api.baza.net/portal/search', {query: inputValue});
                const searchResult = await response.data.data.movies;

                if (active && searchResult?.length > 0) {
                    setOptions(searchResult);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();

        return () => {
            active = false;
        };
    }, [inputValue]);

    return (
        <Autocomplete id="asynchronous-demo" style={{width: 300}}
                      getOptionSelected={(option, value) => option.name === value.name}
                      getOptionLabel={(option) => option.name}
                      options={options}
                      loading={loading}
                      onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                      }}
                      onChange={(event, newValue) => {
                          setValue(newValue);
                      }}

                      renderInput={
                          (params) => (
                              <TextField {...params}
                                         size="small"
                                         label="Поиск"
                                         variant="outlined"
                                         InputProps={{
                                             ...params.InputProps,
                                             endAdornment: (
                                                 <React.Fragment>
                                                     {loading ? <CircularProgress color="inherit" size={20}/> : null}

                                                     {params.InputProps.endAdornment}
                                                 </React.Fragment>),
                                         }}/>)}
        />);
};

export default AsynchronousSearch;