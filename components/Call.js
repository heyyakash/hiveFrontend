import React, { useEffect, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
// import {firestore} from'firebase'
import { Mesh } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { io } from 'socket.io-client'
import { Html } from '@react-three/drei'


const Call = () => {
    const [callValue, setCallValue] = useState("")
    const [userArray, setUserArray] = useState([''])
    let x = Math.random() * 1
    const [position, setPosition] = useState([x, x, x])
    console.log(position)
    useEffect(() => {
        window.addEventListener('keypress', (e) => changePosition(e))
    }, [])
    const mesh = useRef()
    const servers = {
        iceServers: [
            {
                urls: ['stun:stun.l.google.com:19302',
                    'stun:stun1.l.google.com:19302',
                    'stun:stun2.l.google.com:19302']
            }
        ]
    }
    let pc = new RTCPeerConnection(servers)
    let localStream = null
    let remoteStream = null

    const webCamVid = useRef()
    const remCamVid = useRef()

    const getMedia = async () => {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        remoteStream = new MediaStream()

        localStream.getTracks().forEach((track) => {
            pc.addTrack(track, localStream)
        })

        pc.ontrack = event => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track)
            })
        }

        webCamVid.current.srcObject = localStream
        remCamVid.current.srcObject = remoteStream
    }

    const callButton = async () => {
        const callDoc = firestore.collection('calls').doc()
        const offerCandidates = callDoc.collection('offercandidates')
        const answerCandidates = callDoc.collection('answerCandidates')

        setCallValue(callDoc.id)
        console.log(callValue)

        pc.onicecandidate = event => {
            event.candidate && offerCandidates.add(event.candidate.toJSON())
        }

        const offerDescription = await pc.createOffer()
        await pc.setLocalDescription(offerDescription)

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        }
        await callDoc.set({ offer })

        callDoc.onSnapshot((snapshot) => {
            const data = snapshot.data()
            if (!pc.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer)
                pc.setRemoteDescription(answerDescription)
            }
        })

        answerCandidates.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data())
                    pc.addIceCandidate(candidate);
                }
            })
        })


    }

    const answer = async () => {
        const callId = callValue
        const callDoc = firestore.collection('calls').doc(callId)
        const answerCandidates = callDoc.collection('answerCollection')

        pc.onicecandidate = event => {
            event.candidate && answerCandidates.add(event.candidate.toJSON())
        }
        const callData = (await callDoc.get()).data()
        const offerDescription = callData.offer
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription))

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription)

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp
        }

        await callDoc.update({ answer })

        offerCandidates.onSnapShot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                console.log(change)
                if (change.type === 'added') {
                    let data = change.doc.data()
                    pc.addIceCandidate(new RTCIceCandidate(data))
                }
            })
        })
    }

    // let userArray = [{ name: "Akash", position}]


    const changePosition = (e) => {
        if (e.key === 'w') setPosition([position[0], position[1], position[2] - 0.5])
        if (e.key === 's') setPosition([position[0], position[1], position[2] + 0.5])
        if (e.key === 'a') setPosition([position[0] - 0.5, position[1], position[2]])
        if (e.key === 'd') setPosition([position[0] + 0.5, position[1], position[2]])
        console.log(mesh.current.position)
    }
    const obj = useLoader(OBJLoader, '/astronaut/Astronaut.obj')
    return (
        <>
            <pointLight color={'tomato'} rotation={new THREE.Euler(0, 0, 0, 'XYZ')} />
            {userArray.map((astro) => {
                return (
                    <>
                        <primitive object={obj} key={astro.name} ref={mesh} position={position} />
                    </>)
            })}

            {/* <Html tranform occlude position = {[0,0,0]}>
            <video autoplay playsinline ref = {webCamVid}></video>
            <video autoplay playsinline ref = {remCamVid}></video>
            <button onClick = {()=>getMedia()}>Webcam</button>
            <button onClick = {()=>callButton()}>call</button>
            <button onClick = {()=>answer()}>answer</button>

        </Html> */}
            <Html transform occlude position={[0, 40, 0]} className="w-[500px] h-[500px] bg-white/80 p-4 rounded-xl overflow-auto flex flex-col">
                <video autoplay playsinline ref={webCamVid}></video>
                <video autoplay playsinline ref={remCamVid}></video>
                <button onClick={() => getMedia()}>Webcam</button>
                <button onClick={() => callButton()}>call</button>
                <button onClick={() => answer()}>answer</button>

            </Html>
        </>
    )
    // return (
    //     <mesh ref= {mesh} position={position}>
    //         <boxGeometry />
    //         <meshStandardMaterial />
    //     </mesh>
    // )
}

export default Call