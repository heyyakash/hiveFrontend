import { Html } from '@react-three/drei'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getTweets } from '../../apis/fetch'
import Tweet from './Tweet'
import tweets from './tweets.json'
import * as THREE from 'three'

const Twitter = () => {

    const img = tweets?.includes?.users[0]?.profile_image_url

  return (
    <Html position={[-15,12,2]} rotation = {new THREE.Euler( 0, -5, 0, 'XYZ' )} transform occlude className = "w-[500px] flex flex-col bg-white/80 backdrop-blur-xl p-6 rounded-xl h-[500px] scroll-auto">
        <b className='font-xl'>Twitter</b>
        <div className="grid mt-auto grow overflow-auto grid-cols-1 grid-rows-5  ">
        {tweets.data.slice(0,5).map((t)=><Tweet  key = {t.id} t = {t} includes = {tweets?.includes} />)}
        </div>
    </Html>
  )
}

export default Twitter