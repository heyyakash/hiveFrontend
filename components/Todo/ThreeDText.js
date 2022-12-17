import React from 'react'
import { Text3D } from '@react-three/drei'

const ThreeDText = () => {
  return (
    <Text3D font={fontUrl} {...textOptions}>
  Hello world!
  <meshNormalMaterial />
</Text3D>
  )
}

export default ThreeDText