import React, { useEffect, useRef, useState } from 'react'
import InputManager from '../InputManager/InputManager'

// Props create the room (height * tileSize)
const Viewport = props => {
  // Height, width &  tile size for canvas dimensions
  const [height, setHeight] = useState('36')
  const [width, setWidth] = useState('64')
  const [tileSize, setTileSize] = useState('10')

  // Background for canvas
  const [background, setBackground] = useState()

  // Player starting position
  const [player, setPlayer] = useState({ x: 35, y: 50 })

  // Reference for canvas
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
    inputManager.bindKeys()
    inputManager.subscribe(handleInput)
    // Close event listener on exit
    return () => {
      inputManager.unbindKeys()
      inputManager.unsubscribe(handleInput)
    }
  }, [])

  // Update canvas with each state change
  useEffect(() => {
    // Get canvas context
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, width * tileSize, height * tileSize)
    ctx.fillStyle = '#000'
    ctx.fillRect(player.x, player.y, 18, 18)
  }, [])

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
