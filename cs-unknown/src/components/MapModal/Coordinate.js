import React from 'react'

const Coordinate = props => {

    return <p style={{
        background: 'black',
        color: props.currentRoom === props.coo.title ? 'red' : 'white',
        width: '10%',
        margin: 0,
        border: '1px solid white',
        padding: 5
    }}>{props.coo.title}</p>

}

export default Coordinate
