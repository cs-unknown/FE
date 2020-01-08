import React, { useEffect, useRef, useState } from 'react'

const Viewport = props => {
  // Set height and width for displayed room
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')

  return (
    <canvas
      height={height}
      width={width}
      style={{ border: '1px solid black' }}
    ></canvas>
  )
}

export default Viewport
