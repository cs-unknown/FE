import React, { useEffect, useRef, useState } from 'react'

import styles from './viewport.module.css'
import InputManager from '../InputManager/InputManager'
import bedroom from '../../assets/Bedroom.png'
import easternSprites from '../../assets/easternSprites.png'
import northernSprites from '../../assets/northernSprites.png'
import southernSprites from '../../assets/southernSprites.png'
import westernSprites from '../../assets/westernSprites.png'

const Viewport = props => {
  // Background for canvas
  const [background, setBackground] = useState()

  // Player character starting position
  const [playerChar, setPlayerChar] = useState({ x: 0, y: 0 })

  // Reference canvases
  const canvasRef1 = useRef()
  const canvasRef2 = useRef()
  const canvasRef3 = useRef()

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
    // Create perimeter boundary
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
    const ctx1 = canvasRef1.current.getContext('2d')
    const ctx2 = canvasRef2.current.getContext('2d')

    // Wipe canvases
    ctx1.clearRect(0, 0, width, height)
    ctx2.clearRect(0, 0, width, height)

    // Set background image
    const bgImg = new Image()
    bgImg.src = bedroom

    // Draw background image
    bgImg.onload = () => ctx1.drawImage(bgImg, 0, 0)

    // Set sprite image
    const spriteImg = new Image()
    spriteImg.src = southernSprites

    // Draw sprite image
    spriteImg.onload = () =>
      ctx2.drawImage(
        spriteImg,
        50,
        0,
        50,
        60,
        playerChar.x,
        playerChar.y,
        50,
        60
      )
    /* 
      Parameters for drawImage with a sprite sheet:
      drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh):
        img = the source image object -> sprite sheet
        sx = source x -> frame index * frame width
        sy = source y -> 0 (single row sprite images in assets)
        sw = source width -> frame width 
        sh = source height -> frame height
        dx = destination x -> playerChar.x
        dy = destination y -> playerChar.y
        dw = destination width -> frame width
        dh = destination height -> frame height    
    */

    ctx2.fillStyle = '#ff0000'
    ctx2.fillRect(playerChar.x, playerChar.y, 20, 20)
  })

  return (
    <div id={styles.container}>
      <canvas id={styles.canvas1} ref={canvasRef1}></canvas>
      <canvas id={styles.canvas2} ref={canvasRef2}></canvas>
    </div>
  )
}

export default Viewport
