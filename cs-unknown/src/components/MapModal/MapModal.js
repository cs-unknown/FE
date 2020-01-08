import React, { useState, useEffect } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'

const MapModal = props => {

    const [map, setMap] = useState([])

    useEffect(_ => {
        axiosWithAuth().get('https://unknown-mud.herokuapp.com/api/adv/rooms/')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    return null

}

export default MapModal
