import React from 'react';
import Grid from "@mui/material/Grid2";
import MovieCard from "./MovieCard";
import {useSelector} from "react-redux";

function MovieCards() {
    const movies = useSelector(state => state.movies.movies)

    const cards = movies.map(m => (
        <Grid>
            <MovieCard id={m.id} image={m.posters[0]} name={m.name} rating_kp={m.rating_kp} description={m.description} year={m.year}/>
        </Grid>
    ));

    return (
        <Grid container spacing={2}>
            {cards}
        </Grid>
    );
}

export default MovieCards;