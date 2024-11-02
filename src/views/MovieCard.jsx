import React from 'react';
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function MovieCard({id, image, name, rating_kp, year}) {
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = () => {
        console.log("Click")
    };

    return (
        <Link to={`/movies/${id}`}>
        <Box
            component='div'
            sx={{
                position: 'relative',
                height: '400px',
                width: '178px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img
                src={image}
                alt={name}
                style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    transition: 'opacity 0.2s ease-in-out',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '160px',
                    width: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 20px, rgba(0,0,0,1) 20%)',
                    padding: '1rem',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h6" color="white" align="center">
                    {name}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                    <Typography variant="subtitle2" color="white" ml={1}>
                        {rating_kp.toFixed(1)}
                    </Typography>
                    <Typography variant="subtitle2" color="white" ml={1}>
                        {year}
                    </Typography>

                </Box>
            </Box>
        </Box>
        </Link>
    );
}

export default MovieCard;