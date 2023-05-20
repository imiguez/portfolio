import { FC } from "react";
import { ThreeModelInterface } from "../../../interfaces/ThreeModelInterface";
import ThreeModel from "../ThreeModel";
import React from "react";


const RoomP: FC = () => {
    const model: ThreeModelInterface = {
        url: "./models/room/scene.gltf",
        scale: 8,
        objectPosition:  [0, -50, 0],
    }

    return (
        <ThreeModel {...model}/>
    );
}

export default RoomP;