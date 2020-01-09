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
        <div className='main-container'>
            <div className='main-container-1'>
                {/* should house the overlay and animations from jason whatever we end up calling that.*/}
                <div className='sub-container-1'> background/room image element </div>

                {/* rests under the background/room element */}
                <Movement />

            </div>
            
            {/* floated to the right */}
            <Sidebar />
        </div>
    )
}

export default Main