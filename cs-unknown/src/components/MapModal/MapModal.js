import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import axiosWithAuth from '../utils/axiosWithAuth'
import Coordinate from './Coordinate'

const MapModal = props => {

    const state = useSelector(state => state)

    const [map, setMap] = useState([])

    useEffect(_ => {
        axiosWithAuth().get('https://unknown-mud.herokuapp.com/api/adv/rooms/')
            .then(res => {
                const sorted = res.data.sort((first, second) => second.title.split(' ')[3] - first.title.split(' ')[3]),
                    tens = []
                for (let i = 0; i < sorted.length; i += 10) {
                    tens.push(sorted.slice(i, i + 10))
                }
                console.log(tens)
                setMap(tens)
            })
            .catch(err => console.log('something', err.response))
    }, [state])

    if (map.length) return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        height: '50%',
        margin: '0 auto',
        fontSize: 20
    }}>
        {map.map((row, id) => <div key={id} style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            margin: 0,
            direction: id % 2 !== 0 ? 'rtl' : 'ltr'
        }}>
            {row.map((coo, index) => <Coordinate
                key={index}
                coo={coo}
                currentRoom={state.title}
            />)}
        </div>
        )}
    </div>

    else return null

}

export default MapModal
