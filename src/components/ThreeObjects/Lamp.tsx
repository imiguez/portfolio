import { FC } from "react";
import { ThreeModelInterface } from "../../interfaces/ThreeModelInterface";
import ThreeModel from "./ThreeModel";
import React from "react";
import * as THREE from "three";


const Lamp: FC = () => {
    
    const pointLight = new THREE.PointLight( "#ffffff", 10, 200 );
    pointLight.position.set( 11, 40, 0 );
    pointLight.decay = 5;
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 2048;
    pointLight.shadow.mapSize.height = 2048;
    pointLight.shadow.bias = -0.0001;
    // const pointLightHelper = new THREE.PointLightHelper( pointLight, 2 );
    const lamp: ThreeModelInterface = {
        url: "./models/office_lamp/scene.gltf",
        scale: 0.8,
        objectPosition: [-45, -11, 10],
        rotation: new THREE.Euler(0,-1,0, "XYZ"),
        lights: [pointLight]
    }

    return (
        <ThreeModel {...lamp} />
    );
}

export default Lamp;