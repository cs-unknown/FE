import React, {useState, useEffect} from 'react';


//for each response to a move call, the response.data will have to be passed in here as props.

const Textbox = (props) => {
    const [text, setText] = useState(["Welcome to Game Unknown.", "*A commanding voice echoes through the chamber you are standing in and rebounds throughout your skull.*","*a sense of dark dread fills your being, like when you have to use the restroom, but you are nowhere near one.*", "'Good luck figuring out how to win.'", "'MUAAAAHAHAHAHAAAAAAA'",])
    

    useEffect(()=> {
        setText([...text] + props.newText)
    },[props.text]) //double check this dependency array for naming convention.
    
    return (
    //css will have to allow for scrolling overflow of text in this box.
      <div className='textbox'>
        {text.map((line, i) => {
            <p key={"line"+i}>{line}</p>
        })}
      </div>
  )
}

//this will need to be imported into Sidebar.
export default Textbox;