import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import axiosWithAuth from '../utils/axiosWithAuth'
import Coordinate from './Coordinate'

const MapModal = props => {

    const currentUser = useSelector(state => state.currentUser)

    const [map, setMap] = useState([])

    useEffect(_ => {
        axiosWithAuth().get('https://unknown-mud.herokuapp.com/api/adv/rooms/')
            .then(res => setMap(res.data))
            .catch(err => console.log('something', err.response))
    }, [])

    if (map.length) return <div style={{
        display: 'grid',
        gridTemplateRows: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%',
        gridTemplateColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%'
    }}>
        {map.sort((first, second) => first.title.split(' ')[3] - second.title.split(' ')[3])
            .map((coo, index) => <Coordinate key={index} coo={{ ...coo, id: index }} currentRoom={coo.players.includes(currentUser)} />)}
    </div>

    else return null

}

export default MapModal
