import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { move } from '../../actions/roomActions'
import axiosWithAuth from '../utils/axiosWithAuth'
import Sidebar from '../Sidebar/Sidebar';
import Movement from "../Movement/Movement"
import MapModal from "../MapModal/MapModal"
import './Main.css'

const Main = () => {

    const dispatch = useDispatch()

    useEffect(_ => {
        axiosWithAuth().get('https://unknown-mud.herokuapp.com/api/adv/init/')
            .then(res => dispatch(move(res.data)))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="theBigOne">
            {/* should house the overlay and animations from jason whatever we end up calling that.*/}
            <div className="backgroundThing">
                <MapModal />
                {/* rests under the background/room element */}
                <Movement className="movement"/>   
            </div>

            
            {/* floated to the right */}
            <Sidebar className="sidebar"/>

        </div>
    )
}

export default Main