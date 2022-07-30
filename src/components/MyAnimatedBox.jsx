import React, { useState } from "react";

function MyAnimatedBox() {
  const [active, setActive] = useState(false);

  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onDoubleClick={(e)=>{
        console.log("DblClick")
      }}
      onPointerOver={(e) => {
        console.log("Over");
      }}
      onPointerOut={(e)=>{
        console.log("Out")
      }}
      onPointerEnter={(e)=>{
        console.log("Enter")
      }}
      onPointerLeave={(e)=>{
        console.log("Leave")
      }}
      onPointerMissed={(e)=>{
        console.log("Missed")
      }}
      onPointerMove={(e)=>{
        console.log("move")
      }}
      onPointerUp={(e)=>{
        console.log("Up")
      }}
      onPointerDown={(e)=>{
        console.log("Down")
      }}
      onWheel={(e)=>{
        console.log("Wheel")
      }}
      onContextMenu={(e)=>{
        console.log("Menu")
      }}
    >
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default MyAnimatedBox;
