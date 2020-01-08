import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Movement from "../Movement/Movement"

const Main = () => {
    return (
        <div>
            {/* should house the overlay and animations from jason whatever we end up calling that.*/}
            <div> background/room image element </div>

            {/* floated to the right */}
            <Sidebar/>

            {/* rests under the background/room element */}
            <Movement/>
        </div>
    )
}

export default Main