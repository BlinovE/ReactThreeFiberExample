import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MyAnimatedBox } from "./components/MyAnimatedBox/MyAnimatedBox";
import MyImage from './components/MyImage/MyImage';

const CameraController = ()=>{
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.minDistance = 1;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}

function AnimateRotateXYZMesh({position}){
  const animateYMesh = useRef();
  useFrame(({clock})=>{
    animateYMesh.current.rotation.x = Math.sin(clock.getElapsedTime());    
  });
  return (
    <mesh ref={animateYMesh} position={[...position]}>
      <MyAnimatedBox />
    </mesh>    
  );
}


function App() {

  const cubes = []

  for(let i=0;i<5;i++){
    cubes.push(<AnimateRotateXYZMesh key={i} position={[i*2,0,0]}/>);
  }
  
  return (
    <div id="canvas-container">
      <Canvas orthographic>
        <CameraController/>
        <ambientLight intensity={0.1} />
        <directionalLight />
        <Suspense fallback={null}>
          <MyImage />
        </Suspense>
        
      </Canvas>
    </div>
  );
}

export default App;
