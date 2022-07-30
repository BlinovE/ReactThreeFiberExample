import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import MyAnimatedBox from "./components/MyAnimatedBox";


function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 2);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}

function AnimateYMesh(){
  const animateYMesh = useRef();
  useFrame(({clock})=>{
    animateYMesh.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <mesh ref={animateYMesh}>
      <MyAnimatedBox />
    </mesh>    
  );
}
function AnimateZMesh(){
  const animateZMesh = useRef();
  useFrame(({clock})=>{
    animateZMesh.current.rotation.z = clock.getElapsedTime();
  });
  return (
    <mesh ref={animateZMesh}>
      <MyAnimatedBox />
    </mesh>    
  );
}
function AnimateXMesh(){
  const animateXMesh = useRef();
  useFrame(({clock})=>{
    animateXMesh.current.rotation.x = clock.getElapsedTime();
  });
  return (
    <mesh ref={animateXMesh}>
      <MyAnimatedBox />
    </mesh>    
  );
}

function App() {
  
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 60, near: 1, far: 3, position: [0, 0, 2] }}>
        <ambientLight intensity={0.1} />
        <directionalLight />
        <AnimateYMesh />
        <AnimateZMesh />
        <AnimateXMesh />
        {/* <CameraHelper />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[1, 2, 5]} />
        <mesh
          visible
          position={[0, 0, 0]}
          rotation={[Math.PI / 4, Math.PI / 7, Math.PI / 6]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
}

export default App;
