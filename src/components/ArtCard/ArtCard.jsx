import React from 'react'

const ArtCard = (props) => {
    return (
        <div>
            <img src={props.art.primaryImageSmall} alt="" />
            <h1>{props.art.title}</h1>
            <p>{props.art.objectBeginDate}</p>
            <p>{props.art.artistDisplayName}</p>
        </div>
    )
}

export default ArtCard
