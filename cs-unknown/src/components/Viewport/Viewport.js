import React, { useEffect, useRef, useState } from 'react'
import InputManager from '../InputManager/InputManager'

// Props create the room (height * tileSize)
const Viewport = props => {
  // Height, width &  tile size for canvas dimensions
  const [height, setHeight] = useState('50')
  const [width, setWidth] = useState('50')
  const [tileSize, setTileSize] = useState('10')

  // Player starting position
  const [player, setPlayer] = useState({ x: 35, y: 50 })

  // Reference canvas
  const canvasRef = useRef()

  // Instantiate InputManager
  let inputManager = new InputManager()

  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`)
    let newPlayer = { ...player }
    newPlayer.x += data.x * tileSize
    newPlayer.y += data.y * tileSize
    setPlayer(newPlayer)
  }

  // Start input event listener
  useEffect(() => {
    console.log('Bind input')
    inputManager.bindKeys()
    inputManager.subscribe(handleInput)
    // Close it on exit
    return () => {
      inputManager.unbindKeys()
      inputManager.unsubscribe(handleInput)
    }
  })

  // Update canvas when state changes
  useEffect(() => {
    console.log('Draw to canvas')
    // Set context
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, width * tileSize, height * tileSize)
    ctx.fillStyle = '#000'
    ctx.fillRect(player.x, player.y, 18, 18)
  })

  return (
    <canvas
      ref={canvasRef}
      height={height * tileSize}
      width={width * tileSize}
      style={{ border: '1px solid black' }}
    ></canvas>
  )
}

export default Viewport
