import React from 'react';

function Posters({posters}) {
    if (!posters) return
    return (
        <>
            {posters.map((item) => (
                <img sx={{maxHeight: 200}}
                     src={item}
                     height='300px'
                     loading="lazy"
                />
            ))}
        </>
    );
}

export default Posters;