import { Html } from '@react-three/drei'
import React from 'react'

const Notion = () => {
  return (
    <Html className='w-[800px] h-[800px] overflow-hidden bg-white/80 rounded-xl' transform occlude position={[-40,40,0]}>
        <iframe src="https://v1.embednotion.com/embed/ae55303426c64e2c8eeb86edebc3826d" className='w-full h-full' frameborder="0"></iframe>
    </Html>
  )
}

export default Notion