import { useFrame, useThree, extend } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitalControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Orbit = () => {


  const { camera, gl: { domElement } } = useThree()

  const controls = useRef()
  
  console.log(controls)
  useFrame(() => {
    // controls.current.mouseButtons.RIGHT = THREE.MOUSE.ROTATE
    // controls.current.mouseButtons.LEFT = THREE.MOUSE.PAN
    controls.current.keys = {
      LEFT:"ArrowLeft",
      UP:"ArrowUp",
      RIGHT:"ArrowRight",
      BOTTOM:"ArrowDown"
    }
    controls.current.keyPanSpeed = 130;
    controls.current.listenToKeyEvents(window)
    controls.current.panSpeed= 10
    return controls.current.update()
  })
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      // autoRotate = {true}
      autoRotateSpeed = {1}
      enableZoom={true}
      enableDamping={true} 
    />
  )
}

export default Orbit