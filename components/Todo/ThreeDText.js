import React from 'react'
import { Text3D } from '@react-three/drei'

const ThreeDText = () => {
  return (
      <>
      <ambientLight position={[-2,-1,0]} />
    <Text3D font={'/font/font.json'} position = {[-2,0,0]} size = {0.5} bevelEnabled bevelSize={0.05}>
        Hello
    <meshNormalMaterial />
    </Text3D>
    <Text3D font={'/font/font.json'} position = {[-2,-1,0]} size = {0.5} bevelEnabled bevelSize={0.05}>
        Akash Sharma
    <meshNormalMaterial color={"tomato"} />
    </Text3D>
    </>
  )
  
}

export default ThreeDText