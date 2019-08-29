import React from 'react'
import PlayerCard from './PlayerCard'

const CardContainer = ({ players }) => {
    return (
        <div className="card-container">
            {
                players.map((player, i) => <PlayerCard
                    key={i}
                    {...player}
                />)
            }
        </div>
    )
}

export default CardContainer