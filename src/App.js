import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import MyAnimatedBox from "./components/MyAnimatedBox";

function AnimateRotateXYZMesh(){
  const animateYMesh = useRef();
  useFrame(({clock})=>{
    animateYMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
    animateYMesh.current.rotation.y = Math.tan(clock.getElapsedTime());
    animateYMesh.current.rotation.z = Math.sin(clock.getElapsedTime());
  });
  return (
    <mesh ref={animateYMesh}>
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
        <AnimateRotateXYZMesh />        
      </Canvas>
    </div>
  );
}

export default App;
