import React, { useState } from "react";

function MyAnimatedBox() {
  const [active, setActive] = useState(false);
  const [materialColor, setMaterialColor] = useState("royalblue")

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
        if( e.wheelDeltaY > 0){
            setMaterialColor("red");
        }else{
            setMaterialColor("blue");
        }
      }}
    >
      <boxGeometry />
      <meshPhongMaterial color={materialColor} />
    </mesh>
  );
}

export default MyAnimatedBox;
