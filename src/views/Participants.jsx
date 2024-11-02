import React from 'react';

function Participants({participants}) {
    if (!participants) return null;

    return (<> {Object.values(participants).map((item) => (
        <img src={item.photo} alt={item.name} style={{maxHeight: '200px'}} loading="lazy"/>))} </>);
}

export default Participants;