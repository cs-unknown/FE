import React from 'react';


const Movement = () => {

let moveWest = () => {
    //make axiosWithAuth POST request 
    //body will be '{"direction":"w"}' https://unknown-mud.herokuapp.com/api/adv/move/
}

let moveNorth = () => {
    //make axiosWithAuth POST request 
    //body will be '{"direction":"n"}' https://unknown-mud.herokuapp.com/api/adv/move/
}

let moveSouth = () => {
    //make axiosWithAuth POST request 
    //body will be '{"direction":"s"}' https://unknown-mud.herokuapp.com/api/adv/move/
}

let moveEast = () => {
    //make axiosWithAuth POST request 
    //body will be '{"direction":"e"}' https://unknown-mud.herokuapp.com/api/adv/move/
}

    return(
        <div className="move_button_container">
            <div className="direction_button" onClick={moveWest()}>West</div>
                {/* css for this class will have to have smaller heights, and will flex-direction column instead of row. */}
                <div className="northsouthButtons">
                    <div className="direction_button" onClick={moveNorth()}>North</div>
                    <div className="direction_button" onClick={moveSouth()}>South</div> 
                </div>
            <div className="direction_button" onClick={moveEast()}>East</div>
        </div>
    )
}

export default Movement