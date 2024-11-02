import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "@mui/material";
import {fetchMovies} from "../redux/moviesThunk";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
    },
});

function MoviePaginator() {
    const dispatch = useDispatch();

    const count = useSelector(state => state.movies.count)
    const pageSize = useSelector(state => state.global.pageSize)

    const [page, setPage] = React.useState(1);

    const classes = useStyles();


    const handleChange = (event, value) => {
        setPage(value);
        const offset = value * pageSize
        dispatch(fetchMovies({pageSize: pageSize, offset: offset}))
    };

    return (
        <div className={classes.root}>
            <Pagination count={Math.ceil(count / pageSize) - 1} page={page} onChange={handleChange}/>
        </div>
    );
}

export default MoviePaginator;