import React, {useEffect} from 'react';
import {Box, Stack} from "@mui/material";
import MovieCards from "./MovieCards";
import MoviePaginator from "./MoviePaginator";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../redux/moviesThunk";

function Movies() {
    const dispatch = useDispatch();
    const pageSize = useSelector(state => state.global.pageSize)

    useEffect(() => {
        dispatch(fetchMovies({pageSize: pageSize, offset: 0}));
    }, [])

    return (
        <Stack spacing={2}>
            <p></p>
            <Box sx={{flexGrow: 1}}>
                <MovieCards/>
            </Box>
            <Box >
                <MoviePaginator/>
            </Box>
            <p></p>
        </Stack>
    );
}

export default Movies;