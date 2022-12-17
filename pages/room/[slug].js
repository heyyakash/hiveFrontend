import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

const Room = () => {
    // const socket = io('https://aeff-2409-4071-2483-a281-18a1-be01-6ae9-c7e5.in.ngrok.io/')
    useEffect(()=>{
        const socket = io('https://orange-cougars-suffer-157-50-69-136.loca.lt',{
            extraHeaders:{
                'Bypass-Tunnel-Reminder':"Hello"
            }
        })
    socket.emit('joinRoom',{username:"Akash",room:"hello"})
    socket.on('message',data=>console.log(data))
    },[])
    
    // console.log(socket)
    const router = useRouter()
    const {slug} = router.query
  return (
    <>{slug}</>
  )
  
}

export default Room