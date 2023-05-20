import { Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import { FC } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import Cpu from "../components/ThreeObjects/desktop/Cpu";
import Keyboard from "../components/ThreeObjects/desktop/Keyboard";
import Lamp from "../components/ThreeObjects/Lamp";
import Desk from "../components/ThreeObjects/desktop/Desk";
import Monitor from "../components/ThreeObjects/desktop/Monitor";
import Room from "../components/ThreeObjects/room/Room";
import NavBar from "@/components/NavBar";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        frameloop="demand"
        gl={{
          toneMapping: THREE.ReinhardToneMapping,
          toneMappingExposure: 2.3,
        }}
        camera={{ position: [0, 10, 200] }}
        shadows
      >
        <color args={[0, 0, 0]} attach={"background"} />
        <Environment preset={"night"} />
        <hemisphereLight args={["#ffb703", "#d5bdaf"]} intensity={0.4} />
        <Lamp />
        <Monitor />
        <Keyboard />
        <Cpu />
        <Desk />
        <Room />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Home;
