import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import Posters from "./Posters";
import Participants from "./Participants";
import Grid from "@mui/material/Grid2";
import {useSelector} from "react-redux";


function Movie() {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const countries = useSelector(state => state.countries.countries)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://api.baza.net/portal/movie/${id}`);
                console.log(response.data.data)
                setMovie(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Загрузка...</div>;
    }

    return (
        <Grid container spacing={3}>
            <Grid size={4}>
                <Posters posters={movie.posters}/>
            </Grid>
            <Grid size={8}>
                <h1>{movie.name} ({movie.year})</h1>
                <p>{movie.description}</p>
                <p>Страны: {countries.filter(country => movie.countries.includes(country.id)).map(country => country.name).join(", ")}</p>
            </Grid>
            <Grid size={12}>
                <Participants participants={movie.participants}/>
            </Grid>
            <Grid size={12}>
                {movie.files.map(file => (
                    <ReactPlayer
                        url={file.online}
                        controls={true}
                        playing={false}
                        width="100%"
                        height="400px"
                    />
                ))}
            </Grid>
        </Grid>
    );
}

export default Movie;