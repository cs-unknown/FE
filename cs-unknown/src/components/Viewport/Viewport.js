import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './viewport.module.css'
import InputManager from '../InputManager/InputManager'

import images from '../../images'

import bedroom from '../../assets/Bedroom.png'
import easternSprites from '../../assets/sprites/easternSprites.png'
import northernSprites from '../../assets/sprites/northernSprites.png'
import southernSprites from '../../assets/sprites/southernSprites.png'
import westernSprites from '../../assets/sprites/westernSprites.png'

const Viewport = props => {
  // Object containing all images
  const imgs = images
  console.log(imgs)

  // Background image for canvas
  const [background, setBackground] = useState()

  // Player character starting position
  const [playerChar, setPlayerChar] = useState({ x: 295, y: 150 })

  // Reference canvases
  const canvasRef1 = useRef()
  const canvasRef2 = useRef()
  // const canvasRef3 = useRef()  -- 3rd canvas for item placement

  // Dimensioning (16:9 aspect ratio)
  const height = 360
  const width = 640
  const tileSize = 20

  // Instantiate InputManager
  let inputManager = new InputManager()

  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`)
    let newPlayer = { ...playerChar }
    newPlayer.x += data.x * tileSize
    newPlayer.y += data.y * tileSize
    newPlayer.dir = data.dir
    // Create perimeter boundary
    if (
      newPlayer.x >= 0 &&
      newPlayer.x < width - 50 &&
      newPlayer.y >= 0 &&
      newPlayer.y < height - 60
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

    // Function for drawing sprites on canvas (ctx2)
    /* 
        Parameters for drawSprite(): 
          img = the source img object (sprite sheet)
          sx = source x  (frame index * frame width)
          sy = source y = 0 (only on row of sprites per image)
          sw = source width  (frame width) 
          sh = source height (frame height)
          dx = destination x (playerChar.x)
          dy = destination y (playerChar.y)
          dw = destination width (frame width)
          dh = destination height (frame height)    
      */
    const drawSprite = (img, sx, sy, sw, sh, dx, dy, dw, dh) => {
      spriteImg.onload = () =>
        ctx2.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    // Set sprite image
    const spriteImg = new Image()
    switch (playerChar.dir) {
      case 'n':
        spriteImg.src = northernSprites
        drawSprite(spriteImg, 50, 0, 50, 60, playerChar.x, playerChar.y, 50, 60)
        break
      case 'e':
        spriteImg.src = easternSprites
        drawSprite(spriteImg, 50, 0, 50, 60, playerChar.x, playerChar.y, 50, 60)
        break
      case 's':
        spriteImg.src = southernSprites
        drawSprite(spriteImg, 50, 0, 50, 60, playerChar.x, playerChar.y, 50, 60)
        break
      case 'w':
        spriteImg.src = westernSprites
        drawSprite(spriteImg, 50, 0, 50, 60, playerChar.x, playerChar.y, 50, 60)
        break
      default:
        spriteImg.src = southernSprites
        drawSprite(spriteImg, 50, 0, 50, 60, playerChar.x, playerChar.y, 50, 60)
        break
    }
  })

  return (
    <div id={styles.container}>
      <canvas
        id={styles.canvas1}
        height={height}
        width={width}
        ref={canvasRef1}
      ></canvas>
      <canvas
        id={styles.canvas2}
        height={height}
        width={width}
        ref={canvasRef2}
      ></canvas>
    </div>
  )
}

export default Viewport
