import React from 'react'
import { CubeTextureLoader } from 'three'
import { useThree } from '@react-three/fiber'

const Skybox = () => {
    const {scene} = useThree()
    const loader = new CubeTextureLoader()
     const texture = loader.load([
        "/stormydays/stormydays_ft.png",
        "/stormydays/stormydays_bk.png",
        "/stormydays/stormydays_up.png",
        "/stormydays/stormydays_dn.png",
        "/stormydays/stormydays_rt.png",
        "/stormydays/stormydays_lf.png",
    ])
    scene.background = texture
  return (
    null
  )
}

export default Skybox