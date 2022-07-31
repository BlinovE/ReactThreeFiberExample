import React from 'react';
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import img from './img/ava.jpg';

function MyImage(){
    const texture = useLoader(THREE.TextureLoader, img);
    return (
        <mesh>
            <planeBufferGeometry attach="geometry" args={[3,3]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export default MyImage ;

