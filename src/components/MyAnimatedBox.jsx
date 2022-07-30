import React from 'react';
import { useFrame } from '@react-three/fiber';

function MyAnimatedBox(){
    useFrame(({ clock })=>{
        const a = clock.getElapsedTime();
        console.log(`Elapsed Time: ${a}`);
    });
    return (
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="royalblue" />
        </mesh>
    )
}

export default MyAnimatedBox