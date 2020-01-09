import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import './Sidebar.css'
import MapModal from '../MapModal/MapModal'

//for each response to a move call, the response.data will have to be passed in here as props.

const Textbox = () => {
  const [text, setText] = useState(["Welcome to Game Unknown.", "*A commanding voice echoes through the chamber you are standing in and rebounds throughout your skull.*", "*a sense of dark dread fills your being, like when you have to use the restroom, but you are nowhere near one.*", "'Good luck figuring out how to win.'", "'MUAAAAHAHAHAHAAAAAAA'",])
  const title = useSelector(state => {
    console.log("useSelector State: ", state)
    return state.title
  })
  const description = useSelector(state => state.description)
  const players = useSelector(state => state.players)
  const error_msg = useSelector(state => state.error_msg)

  useEffect(() => {
    console.log(description)
    //if there is an error message it add that to the scroll. if not it adds room title and description.
    error_msg ? setText([`${error_msg}`]) : (setText([`${description}`, (players.length ? `players with you: ${players}` : "you are alone in this room")]))
    //if players are in the room you've just entered it should show in the text box. if not, print that you're alone
  }, [description, error_msg]) //useEffect should only fire if description or error_msg change.

  return (
    //css will have to allow for scrolling overflow of text in this box.
    //i'm going to have to look into getting the bottom part of the scroll to show what is happening.
    <div className='textbox'>
      {text.map((line, i) => <p key={"line" + i}>{line}</p>)}
    </div>
  )
}

//this will need to be imported into Sidebar.
export default Textbox;