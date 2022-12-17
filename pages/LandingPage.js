import React from 'react';
import Image from 'next/image';
import ellipse from '../Images/Ellipse.png'
import wave from '../Images/wave.png'
import wave1 from '../Images/wave2.png'
import cube from '../Images/cube.png'
import loading from '../Images/loading.png'


const LandingPage = () => {
  return (
    <div>
      <nav class="fixed top-0 left-0 w-full py-6">
      <div class="container mx-auto flex justify-between">
        <Image src={cube} class="h-8 animate-bounce" alt=''/>
        
      </div>
    </nav>
    <section class="bg-[#23304c] h-screen flex px-[10%] py-[6%]">
      <Image
        src={ellipse}
        class="z-20 animate-ping w-6 absolute left-24 top-56" alt=""
      />
      <Image
        src={ellipse}
        class="z-20 animate-ping w-6 absolute left-24 top-56" alt=""
      />
      <Image
        src={ellipse}
        class="z-20 animate-ping w-6 absolute left-24 top-56" alt=""
      />
      <Image
        src={ellipse}
        class="z-20 animate-ping w-6 absolute left-24 top-56" alt=""
      />
     

      <Image src={wave} class="absolute bottom-20 right-36 w-96" alt='' />
      <Image src={wave1} class="absolute bottom-20 right-36 w-96" alt='' />
      
      <div class="flex-1">
        <Image src={loading} class="w-9/12" alt='' />
      </div>

      <div class="flex-1 pt-24 ">
        <div class="absolute">
          <h1 class="text-5xl leading-normal py-6 text-white">
          Revolutionize Your Workflow <br />with Our Advanced 3D <br />
            <span class="underline decoration-teal-500">Workspace</span>
          </h1>
          <button
            class="bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default LandingPage;
