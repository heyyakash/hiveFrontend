import { Html } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

const Calendar = () => {
  return (
    <Html className='w-[600px] h-[600px]' position={[-30,-20,0]} rotation = {new THREE.Euler( -.5, .2, 0, 'XYZ' )} transform occlude>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showNav=0&showDate=1&showPrint=0&src=NzcyNDQ0YzcxZjJiOTUyMGY1NDQ0ZTU2NWQ5MWFhYzdjZTY5YzFmNDU1NzA0Y2Q2NTNiNzI3YWM1OWRiMTVlZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21mMTlkZjU0NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342&color=%230B8043&color=%23202124" className='w-full h-full ' scrolling="no"></iframe>
    </Html>

  )
}

export default Calendar