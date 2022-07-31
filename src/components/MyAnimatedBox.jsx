import React, { useRef, useState} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

function MySpringBox({position}) {
  const [active, setActive] = useState("false");
  const myMesh = useRef();
  const spring = useSpring({ scale: active ? 1.5 : 1, config: config.wobbly });
  
//   const state = useThree()
//   useFrame(({clock})=>{
//     console.log(`Mouse: ${state.mouse.x} : ${state.mouse.y}`)
//   })

  return (
    <animated.mesh
        position={[...position]}
      scale={spring.scale}
      onClick={(e) => setActive(!active)}
      ref={myMesh}
    >
      <boxGeometry />
      <meshPhongMaterial color="green" />
    </animated.mesh>
  );
}

function MyAnimatedBox() {
  const [active, setActive] = useState(false);
  const [materialColor, setMaterialColor] = useState("royalblue");

  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={(e) => {
        console.log("Over");
      }}
      onPointerOut={(e) => {
        console.log("Out");
      }}
      onWheel={(e) => {
        if (e.wheelDeltaY > 0) {
          setMaterialColor("red");
        } else {
          setMaterialColor("blue");
        }
      }}
    >
      <boxGeometry />
      <meshPhongMaterial color={materialColor} />
    </mesh>
  );
}

export { MyAnimatedBox, MySpringBox };
