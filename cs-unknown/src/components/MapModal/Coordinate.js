import React from 'react'

const Coordinate = props => {

    return <p style={{ background: 'black', color: props.currentRoom ? 'red' : 'white' }}>{props.coo.title}</p>

}

export default Coordinate
