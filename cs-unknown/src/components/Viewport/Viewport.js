import React, { useEffect, useRef, useState } from 'react'

const Viewport = props => {
  // Height and width for displayed room (set locally or passed in as props)
  const [height, setHeight] = useState('500')
  const [width, setWidth] = useState('500')

  // Reference for canvas
  const canvasRef = useRef()

  // Update canvas when state changes
  useEffect(() => {
    console.log('Draw to canvas')
    // Set context
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#000'
    ctx.fillRect(10, 15, 18, 18)
  })

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ border: '1px solid black' }}
    ></canvas>
  )
}

export default Viewport
