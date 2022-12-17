import { Html } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

const Email = () => {
  return (
    <Html transform className='w-[600px] h-[600px] rounded-xl overflow-hidden' position={[0,20,-20]} rotation = {new THREE.Euler( 0, 0, 0, 'XYZ' )}>
        <iframe src="https://www.autodraw.com/" className='h-full w-full'  frameborder="0"></iframe>
    </Html>
  )
}

export default Email