import { Canvas } from "@react-three/fiber";
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

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 60, near: 1, far: 3, position: [0, 0, 2] }}>
        <MyAnimatedBox/>
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
