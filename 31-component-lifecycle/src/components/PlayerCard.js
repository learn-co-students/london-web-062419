import React from 'react'

class PlayerCard extends React.Component {
  componentDidMount() {
    // const { player_name } = this.props
    // console.log(`Hi, I'm ${player_name}, nice to meet you!`)
  }

  componentWillUnmount() {
    const { player_name } = this.props
    // debugger
    console.log(`WHYYYYYYY!?!?!?, I'm ${player_name} btw...`)
  }

  render () {
    const {
      player_name,
      image,
      current_rank,
      player_country,
      player_points,
      handleClick,
      id
    } = this.props

    return (
      <div className='card'>
        <div className='header'>{player_name}</div>
        <button onClick={() => handleClick(id)}>X</button>
        <img src={image} alt={player_name} />
        <div>{current_rank}</div>
        <div>{player_country}</div>
        <div>{player_points}</div>
      </div>
    )
  }
}

export default PlayerCard
