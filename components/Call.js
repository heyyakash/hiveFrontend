import React, { useEffect,useRef,useState } from 'react'
import { Mesh } from 'three'
import { useFrame, useThree } from '@react-three/fiber'

const Call = () => {
    const [position,setPosition] = useState([0,-1,0])
    useEffect(()=>{
        window.addEventListener('keypress',(e)=>changePosition(e))
    },[])
    const{update} = useThree()
    const mesh = useRef()

    // console.log(mesh?.current)
    // useEffect(()=>{
    //     console.log(mesh.current)
    // },[])
    useFrame(()=>{
        window.addEventListener('keypress',(e)=>changePosition(e))
    })

    const changePosition = (e)=>{
        if(e.key==='w') setPosition([position[0],position[1],position[2]-0.5])
        if(e.key==='s') setPosition([position[0],position[1],position[2]+0.5])
        if(e.key==='a') setPosition([position[0]-0.5,position[1],position[2]])
        if(e.key==='d') setPosition([position[0]+0.5,position[1],position[2]])
   
    }
    return (
        <mesh ref= {mesh} position={position}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    )
}

export default Call