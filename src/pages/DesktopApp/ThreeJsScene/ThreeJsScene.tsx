import ThreeModel from '@/components/ThreeObjects/ThreeModel';
import { desk, keyboard, oldMonitor } from '@/constants/GltfModels';
import { Html, Stage } from '@react-three/drei';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'pages/DesktopApp/ThreeJsScene/ThreeJsScene.css';
import { FC } from 'react';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { useAnimationStore } from '@/store/AnimationStore';

interface IThreeJsScene {
  setEnableRotateControl: (enable: boolean) => void,
}

const ThreeJsScene: FC<IThreeJsScene> = ({ setEnableRotateControl }) => {
  const { camera } = useThree();
  const {startAnimation, endAnimation} = useAnimationStore();
  const started = useAnimationStore((state) => state.started);
  const zoom = useAnimationStore((state) => state.zoom);
  const finalPos1 = {
    x: -.3,
    y: .7,
    z: -1.8
  }
  const lookAt1 = {
    x: -1.5,
    y: .2,
    z: 2
  }
  const finalPos2 = {
    x: 0,
    y: 1,
    z: -8
  }
  const lookAt2 = {
    x: 0,
    y: 0,
    z: 0
  }
  
  const animation = (finalPos, lookAt, animationFrameId) => {
    if (camera.position.x < finalPos.x+0.01 && camera.position.x > finalPos.x-0.01 &&
      camera.position.y < finalPos.y+0.01 && camera.position.y > finalPos.y-0.01 &&
      camera.position.z < finalPos.z+0.01 && camera.position.z > finalPos.z-0.01) {
      cancelAnimationFrame(animationFrameId);
      endAnimation();
    } else {
      camera.position.x = THREE.MathUtils.damp(camera.position.x, finalPos.x, 1, zoom=='in'?0.1:.12);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, finalPos.y, 1, zoom=='in'?0.1:.12);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, finalPos.z, zoom=='in'?.5:1, zoom=='in'?0.1:.12);
      camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
    }
  }
  
  useEffect(() => {
    if (!started) {
      if (zoom == 'out') setEnableRotateControl(true);
      return;
    }
    setEnableRotateControl(!started);
    let animationFrameId;
    const tick = async () => {
      if (started) {
        if (zoom === 'in') animation(finalPos1, lookAt1, animationFrameId);
        else animation(finalPos2, lookAt2, animationFrameId);
      }
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrameId); // Execute when dismount
    };
    
  }, [started]);

  const onKeyboardClick = () => {
    startAnimation('in');
  }

  const onIframeLoad = () => {
    let iframe: HTMLIFrameElement = document.getElementById("iframe") as HTMLIFrameElement;
    iframe.contentWindow.document.getElementById("start-btn").onclick = () => {
      startAnimation('out');
    }
  }

  return (
    <>
      <Stage environment={{ files: '/venice_sunset_1k.hdr' }} />
      <hemisphereLight args={['#ffb703', '#d5bdaf']} intensity={0.4} />
      <ThreeModel model={oldMonitor}>
        <Html transform={true} occlude='blending' geometry={<planeGeometry args={[.470, .384]} /> }
          style={{ width: '800px', height: '652px' }}
          distanceFactor={0.235} 
          position={[0, 0.337, 0.4068]}
          rotation-x={-0.05}>
          <iframe src="./OS" id='iframe' onLoad={onIframeLoad} style={{ width: '796px', height: '648px', position: "absolute", top: 0, left: 0 }} />
        </Html>
      </ThreeModel>
      <ThreeModel model={keyboard} onClick={onKeyboardClick} hoverEffect={{color: 'grey'}} />
      <ThreeModel model={desk} />
    </>
  );
};

export default ThreeJsScene;