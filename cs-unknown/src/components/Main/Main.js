import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { move } from '../../actions/roomActions'
import axiosWithAuth from '../utils/axiosWithAuth'
import Sidebar from '../Sidebar/Sidebar';
import Movement from "../Movement/Movement"

const Main = () => {

    const dispatch = useDispatch()

    useEffect(_ => {
        axiosWithAuth().get('https://unknown-mud.herokuapp.com/api/adv/init/')
            .then(res => dispatch(move(res.data)))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {/* should house the overlay and animations from jason whatever we end up calling that.*/}
            <div> background/room image element </div>

            {/* floated to the right */}
            <Sidebar />

            {/* rests under the background/room element */}
            <Movement />
        </div>
    )
}

export default Main