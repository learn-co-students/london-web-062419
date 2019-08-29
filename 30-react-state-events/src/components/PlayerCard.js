import React from 'react'

const PlayerCard = ({ player_name, image, current_rank, player_country, player_points }) => {
    return (
        <div className="card">
            <div className="header">{player_name}</div>
            <img src={image} alt={player_name} />
            <div>{current_rank}</div>
            <div>{player_country}</div>
            <div>{player_points}</div>
        </div>
    )
}

export default PlayerCard