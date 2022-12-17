import { useRouter } from 'next/router'
import React from 'react'
import {io} from 'socket.io-client'

const Room = () => {
    const socket = io('https://aeff-2409-4071-2483-a281-18a1-be01-6ae9-c7e5.in.ngrok.io/')
    console.log(socket)
    const router = useRouter()
    const {slug} = router.query
  return (
    <>{slug}</>
  )
  
}

export default Room