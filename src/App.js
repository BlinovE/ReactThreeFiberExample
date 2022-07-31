import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {MyAnimatedBox, MySpringBox} from "./components/MyAnimatedBox";

const CameraController = ()=>{
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}

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

  const cubes = []

  for(let i=0;i<10;i++){
    cubes.push(<MySpringBox key={i} position={[i*2,0,0]}/>);
  }
  
  return (
    <div id="canvas-container">
      <Canvas orthographic camera={{ left:-3, right:3, top: 3, bottom:-3, near: 1, far: 10, zoom:30}}>
        <CameraController/>
        <ambientLight intensity={0.1} />
        <directionalLight />
        {cubes}
      </Canvas>
    </div>
  );
}

export default App;
