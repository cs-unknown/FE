import React, { useState, useEffect } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'
import Coordinate from './Coordinate'

const MapModal = props => {

    const [map, setMap] = useState([])

    useEffect(_ => {
        axiosWithAuth().get('https://unknown-mud.herokuapp.com/api/adv/rooms/')
            .then(res => setMap(res.data))
            .catch(err => console.log('something', err.response))
    }, [])

    if (map.length) return <div style={{
        display: 'grid',
        gridTemplateRows: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%',
        gridAutoColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%'
    }}>
        {map.map(coo => <Coordinate key={coo.id} coo={coo} />)}
    </div>

    else return null

}

export default MapModal
