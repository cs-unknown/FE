import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import { useDispatch } from 'react-redux'
import { title, description, players, error_msg } from '../../actions/roomActions'

const Movement = () => {

    const dispatch = useDispatch()

    let moveWest = () => {
        return axiosWithAuth()
            .post('https://unknown-mud.herokuapp.com/api/adv/move/', { "direction": "w" })
            .then(res => {
                console.log("result of call to move west ", res)
                dispatch(title(res.data.title))
                dispatch(description(res.data.description))
                dispatch(players(res.data.players))
                dispatch(error_msg(res.data.error_msg))
            })
            .catch(err => {
                console.log("error making request, please get your act together. ", err)
            })
    }
    let moveNorth = () => {
        return axiosWithAuth()
            .post('https://unknown-mud.herokuapp.com/api/adv/move/', { "direction": "n" })
            .then(res => {
                console.log("result of call to move north ", res)
                dispatch(title(res.data.title))
                dispatch(description(res.data.description))
                dispatch(players(res.data.players))
                dispatch(error_msg(res.data.error_msg))
            })
            .catch(err => {
                console.log("error making request, please get your act together. ", err)
            })
    }
    let moveSouth = () => {
        return axiosWithAuth()
            .post('https://unknown-mud.herokuapp.com/api/adv/move/', { "direction": "s" })
            .then(res => {
                console.log("result of call to move south ", res)
                dispatch(title(res.data.title))
                dispatch(description(res.data.description))
                dispatch(players(res.data.players))
                dispatch(error_msg(res.data.error_msg))
            })
            .catch(err => {
                console.log("error making request, please get your act together. ", err)
            })
    }
    let moveEast = () => {
        return axiosWithAuth()
            .post('https://unknown-mud.herokuapp.com/api/adv/move/', { "direction": "e" })
            .then(res => {
                console.log("result of call to move east ", res)
                dispatch(title(res.data.title))
                dispatch(description(res.data.description))
                dispatch(players(res.data.players))
                dispatch(error_msg(res.data.error_msg))
            })
            .catch(err => {
                console.log("error making request, please get your act together. ", err)
            })
    }

    return (
        <div className="move_button_container">
            <div className="direction_button" onClick={moveWest}>West</div>
            {/* css for this class will have to have smaller heights, and will flex-direction column instead of row. */}
            <div className="northsouthButtons">
                <div className="direction_button" onClick={moveNorth}>North</div>
                <div className="direction_button" onClick={moveSouth}>South</div>
            </div>
            <div className="direction_button" onClick={moveEast}>East</div>
        </div>
    )
}

export default Movement