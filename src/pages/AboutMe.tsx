import React, { FC } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";


const AboutMe: FC = () => {

    return (
        <Canvas style={{ width: "99vw", height: "89vh", border: "1px solid black" }}
            camera={{ position: [0, 3, 10] }}
            shadows={"soft"} >
            <ambientLight intensity={0.5}/>
            <OrbitControls />
        </Canvas>
    )
}

export default AboutMe;