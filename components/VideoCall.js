import { Html } from '@react-three/drei'
import React from 'react'

const VideoCall = () => {
  return (
    <Html transform occlude position={[40,20,20]} className = "w-[500px] h-[500px] bg-white/80 rounded-xl " >
        <iframe src="https://3635-103-169-236-82.in.ngrok.io/" allow="camera;microphone" className='w-full h-full' frameborder="0"></iframe>
    </Html>
  )
}

export default VideoCall