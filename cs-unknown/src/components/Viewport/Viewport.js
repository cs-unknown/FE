import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './viewport.module.css'
import InputManager from '../InputManager/InputManager'

import images from '../../images'

// temp img imports for testing
import door1E from '../../assets/floorandwalls/1doorE.png'
import door1N from '../../assets/floorandwalls/1doorN.png'
import door1S from '../../assets/floorandwalls/1doorS.png'
import door1W from '../../assets/floorandwalls/1doorW.png'
import door2ES from '../../assets/floorandwalls/2doorES.png'
import door2EW from '../../assets/floorandwalls/2doorEW.png'
import door2NE from '../../assets/floorandwalls/2doorNE.png'
import door2NS from '../../assets/floorandwalls/2doorNS.png'
import door2NW from '../../assets/floorandwalls/2doorNW.png'
import door2WS from '../../assets/floorandwalls/2doorWS.png'
import door3NES from '../../assets/floorandwalls/3doorNES.png'
import door3NEW from '../../assets/floorandwalls/3doorNEW.png'
import door3NSW from '../../assets/floorandwalls/3doorNSW.png'
import door3SEW from '../../assets/floorandwalls/3doorSEW.png'
import door4 from '../../assets/floorandwalls/4door.png'
import floor from '../../assets/floorandwalls/floor-01.png'
import easternSprites from '../../assets/sprites/easternSprites.png'
import northernSprites from '../../assets/sprites/northernSprites.png'
import southernSprites from '../../assets/sprites/southernSprites.png'
import westernSprites from '../../assets/sprites/westernSprites.png'

const Viewport = props => {
  // Object containing all images
  // const imgs = images

  // Map information for drawing doors in current room
  const [roomInfo, setRoomInfo] = useState()

  // Player character starting position
  const [playerChar, setPlayerChar] = useState({ x: 295, y: 150 })

  // Reference canvases
  const canvasRef1 = useRef()
  const canvasRef2 = useRef()
  const canvasRef3 = useRef()

  // Floor dimensions (16:9 aspect ratio)
  const height = 360
  const width = 640
  const tileSize = 20

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get('https://unknown-mud.herokuapp.com/api/adv/rooms/')
  //     .then(res => {
  //       const sorted = res.data.sort(
  //           (first, second) =>
  //             second.title.split(' ')[3] - first.title.split(' ')[3]
  //         ),
  //         tens = []
  //       for (let i = 0; i < sorted.length; i += 10) {
  //         tens.push(sorted.slice(i, i + 10))
  //       }
  //       console.log(tens)
  //       setMap(tens)
  //     })
  //     .catch(err => console.log('something', err.response))
  // }, [state])

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
    console.log('Draw to canvases')

    // Canvas contexts
    const ctx1 = canvasRef1.current.getContext('2d')
    const ctx2 = canvasRef2.current.getContext('2d')
    const ctx3 = canvasRef3.current.getContext('2d')

    // Wipe canvases
    ctx1.clearRect(0, 0, width, height)
    ctx2.clearRect(0, 0, width, height)
    ctx3.clearRect(0, 0, width, height)

    // Instantiate new Image
    const floorImg = new Image()
    const spriteImg = new Image()
    const doorImg = new Image()

    // Draw floor
    floorImg.src = floor
    floorImg.onload = () => ctx1.drawImage(floorImg, 0, 0)

    // Function for drawing sprites
    const drawSprite = (img, sx, sy, sw, sh, dx, dy, dw, dh) => {
      spriteImg.onload = () =>
        ctx2.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    // Set sprite image
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

    // Draw walls
    doorImg.src = door4
    doorImg.onload = () => ctx3.drawImage(doorImg, 0, 0)
  })

  return (
    <div id={styles.container}>
      <img id='walls' src={door4} />
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
      <canvas
        id={styles.canvas3}
        height={height}
        width={width}
        ref={canvasRef2}
      ></canvas>
    </div>
  )
}

export default Viewport
