import React,{ useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function MyAnimatedBox(){
    const myMesh = useRef();

    useFrame(({ clock })=>{
        const a = clock.getElapsedTime();
        console.log(`Elapsed Time: ${a}`);
        myMesh.current.rotation.x = clock.getElapsedTime();
    });

    

    return (
        <mesh ref={myMesh}>
            <boxGeometry />
            <meshPhongMaterial color="royalblue" />
        </mesh>
    )
}

export default MyAnimatedBox