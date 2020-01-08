import React, { useEffect, useRef, useState } from 'react'
import InputManager from '../InputManager/InputManager'

const Viewport = props => {
  const [height, setHeight] = useState(36)
  const [width, setWidth] = useState(64)
  const [tileSize, setTileSize] = useState(10)

  // Player character starting position
  const [playerChar, setPlayerChar] = useState({ x: 35, y: 50 })

  // Reference canvas
  const canvasRef = useRef()

  // Instantiate InputManager
  let inputManager = new InputManager()

  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`)
    let newPlayer = { ...playerChar }
    newPlayer.x += data.x * tileSize
    newPlayer.y += data.y * tileSize
    setPlayerChar(newPlayer)
  }

  // Start input event listener
  useEffect(() => {
    console.log('Bind input')
    inputManager.bindKeys()
    inputManager.subscribe(handleInput)
    // Close event listener on exit
    return () => {
      inputManager.unbindKeys()
      inputManager.unsubscribe(handleInput)
    }
  })

  // Update canvas whenever state changes
  useEffect(() => {
    console.log('Draw to canvas')
    // Set canvas context
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, width * tileSize, height * tileSize)
    ctx.fillStyle = '#000'
    ctx.fillRect(playerChar.x, playerChar.y, 18, 18)
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
