import React from 'react'
import PlayerCard from './PlayerCard'

const CardContainer = (props) => {
    return (
        <div className="card-container">
            {
                props.players.map((player, i) => <PlayerCard
                    key={i}
                    {...player}
                    handleClick={props.removePlayer}
                />)
            }
        </div>
    )
}

export default CardContainer