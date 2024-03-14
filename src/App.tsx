import React, { FC, useEffect, useMemo, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import 'styles/canvas.css';
import 'styles/about-me.css';
import HomeBackground from '@/pages/HomeBackground';
import { OrbitControls, useProgress } from '@react-three/drei';
import LoadingMessage from './pages/LoadingMessage';

const App: FC = () => {
  const { progress } = useProgress();
  const [wait, setWait] = useState<boolean>(true);
  const [enableRotateControl, setEnableRotateControl] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
      setEnableRotateControl(true);
      setTimeout(() => {
        const canvas = document.getElementById("canvas");
        canvas.onmousedown = () => {
          canvas.style.cursor = "pointer";
        }
        canvas.onmouseup = () => {
          canvas.style.cursor = "auto";
        }
      }, 1000);
    }, 2000);
  }, []);

  const progressClass = useMemo(() => {
    if (progress == 100) return 'progress progress-animation';
    return 'progress';
  }, [progress]);

  return (
    <div className="canvas-container">
      <LoadingMessage />

      {!wait && (
        <Canvas id="canvas" className="canvas" shadows gl={{
            toneMapping: THREE.ReinhardToneMapping,
            toneMappingExposure: 2.3,
          }}
          camera={{ position: [0, 1, -8], fov: 50 }}> 

          {/* <axesHelper scale={1000} /> */}
          <HomeBackground setEnableRotateControl={setEnableRotateControl}/>
          <OrbitControls enabled={enableRotateControl}  enablePan={false} enableZoom={false} enableRotate={true} />
        </Canvas>
      )}
      <div className={progressClass}>
        <p>{progress}% progress..</p>
      </div>
    </div>
  );
};

export default App;
