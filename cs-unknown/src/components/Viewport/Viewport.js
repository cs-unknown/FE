import React, { useEffect, useRef, useState } from 'react'
import InputManager from '../InputManager/InputManager'
import Bedroom from '../../assets/Bedroom.png'

const Viewport = props => {
  // Background for canvas
  const [background, setBackground] = useState()

  // Player character starting position
  const [playerChar, setPlayerChar] = useState({ x: 0, y: 0 })

  // Reference canvas
  const canvasRef = useRef()

  // Dimensioning (16:9 aspect ratio)
  const height = 360
  const width = 640
  const tileSize = 10

  // Instantiate InputManager
  let inputManager = new InputManager()

  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`)
    let newPlayer = { ...playerChar }
    newPlayer.x += data.x * tileSize
    newPlayer.y += data.y * tileSize
    if (
      newPlayer.x >= 0 &&
      newPlayer.x < width - 19 &&
      newPlayer.y >= 0 &&
      newPlayer.y < height - 19
    ) {
      setPlayerChar(newPlayer)
      console.log(`newPlayer: ${JSON.stringify(newPlayer)}`)
    } else {
      console.log('Cannot move beyond wall.')
      return
    }
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

  // Create / update canvas
  useEffect(() => {
    console.log('Draw to canvas')
    // Background canvas context
    const ctx1 = canvasRef.current.getContext('2d')
    ctx1.clearRect(0, 0, width, height)
    // Set background image
    // const image = new Image()
    // image.src = Bedroom
    // image.onload = () => ctx1.drawImage(image, 0, 0)
    ctx1.fillStyle = '#000'
    ctx1.fillRect(playerChar.x, playerChar.y, 20, 20)
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
