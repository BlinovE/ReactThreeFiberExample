import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import {MyAnimatedBox, MySpringBox} from "./components/MyAnimatedBox";

function AnimateRotateXYZMesh(){
  const animateYMesh = useRef();
  useFrame(({clock})=>{
    animateYMesh.current.rotation.x = Math.sin(clock.getElapsedTime());    
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
        <MySpringBox/>
      </Canvas>
    </div>
  );
}

export default App;
