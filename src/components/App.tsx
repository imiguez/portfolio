import Home from "@/pages/Home";
import React, { FC } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import "styles/canvas.css";
import "styles/about-me.css";
import AboutMe from "@/pages/AboutMe";
import HomeBackground from "@/pages/HomeBackground";

const App: FC = () => {
  return (
    <>
      <div className="canvas-container">
        <Canvas
          className="canvas"
          gl={{
            toneMapping: THREE.ReinhardToneMapping,
            toneMappingExposure: 2.3,
          }}
          camera={{position: [0, 0, 2.5], fov: 50}}
          shadows
        >
          <axesHelper scale={1000} />
          <HomeBackground />
        </Canvas>
      </div>
      <main className="main">
        <Home />
        <AboutMe />
      </main>
    </>
  );
};

export default App;
