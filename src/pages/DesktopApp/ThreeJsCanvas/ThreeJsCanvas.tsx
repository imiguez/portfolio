import { OrbitControls, useProgress } from '@react-three/drei';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import 'pages/DesktopApp/ThreeJsCanvas/ThreeJsCanvas.css';
import ThreeJsScene from '../ThreeJsScene/ThreeJsScene';

export const ThreeJsCanvas = () => {
  const [enableRotateControl, setEnableRotateControl] = useState<boolean>(false);
  const { progress } = useProgress();

  useEffect(() => {
    setEnableRotateControl(true);
    const canvas = document.getElementById('canvas');
    canvas.onmousedown = () => {
      canvas.style.cursor = 'pointer';
    };
    canvas.onmouseup = () => {
      canvas.style.cursor = 'auto';
    };
  }, []);

  const progressClass = useMemo(() => {
    if (progress == 100) return 'progress progress-animation';
    return 'progress';
  }, [progress]);

  return (
    <>
    <Suspense fallback={
      <div className={progressClass}>
        <p>{progress.toPrecision(3)}% progress..</p>
      </div>
    }>
      <Canvas id="canvas" className="canvas" shadows
        gl={{
          toneMapping: THREE.ReinhardToneMapping,
          toneMappingExposure: 2.3,
        }}
        camera={{ position: [0, 1, -8], fov: 50 }} >

        <ThreeJsScene setEnableRotateControl={setEnableRotateControl} />

        <OrbitControls enabled={enableRotateControl} enablePan={false} enableZoom={false} enableRotate={true} />
      </Canvas>
    </Suspense>
    </>
  );
}