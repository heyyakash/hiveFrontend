import { Html } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three'


import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=> {

  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);

    if (index == songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  return (<>
  
    
   <Html occlude transform position={[0,-20,0]} rotation = {new THREE.Euler( -0.5, 0, 0, 'XYZ' )} className = "w-[600px] flex flex-col bg-white/80 backdrop-blur-xl p-6 rounded-xl h-[500px] scroll-auto">                
  {/* <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-2xl h-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-transparent" src="https://imgs.search.brave.com/iUfAdYNmI-SrDTvuP6wvwaj0eVuXdTeD_WD4RVWNaTk/rs:fit:1024:683:1/g:ce/aHR0cHM6Ly9tb3Ju/aW5nY29uc3VsdC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTIvbXVzaWMt/MTAyNHg2ODMucG5n" alt=""></img>
    <div class="flex flex-col justify-between p-4 leading-normal">
       


    </div>
    <div className='player_container'>
      <div className="title pb-8 text-2xl font-serif mx-10 ">
        <p>{currentSong.title}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls flex mx-24">
        <BsFillSkipStartCircleFill size={40} className='btn_action' onClick={skipBack}/>
        {isplaying ? <BsFillPauseCircleFill size={40}  className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill size={40} className='btn_action pp' onClick={PlayPause}/>}
        <BsFillSkipEndCircleFill size={40} className='btn_action' onClick={skiptoNext}/>        
      </div>
    </div>
  </a> */}
  <iframe src="https://magenta.github.io/lofi-player/" className='w-full h-full' frameborder="0"></iframe>
  </Html>


   

   
  </>
  )
}

export default Player