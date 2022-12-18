import { Html } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
// import './ChatWindow.css';

const ChatWindow = () => {
    return (
        <Html transform occlude position={[0, 40, 0]} className="w-[500px] h-[500px] bg-white/80 p-4 rounded-xl overflow-auto flex flex-col">
            <iframe src="https://0e7b-103-169-236-82.in.ngrok.io/" className='w-full h-full' frameborder="0"></iframe>

        </Html>
    );
};

export default ChatWindow;