import React, { useState } from 'react';

function MyAnimatedBox(){
    const [active, setActive] = useState(false);

    return (
        <mesh scale={ active ? 1.5:1 } onClick={()=>setActive(!active)}>
            <boxGeometry />
            <meshPhongMaterial color="royalblue" />
        </mesh>
    )
}

export default MyAnimatedBox