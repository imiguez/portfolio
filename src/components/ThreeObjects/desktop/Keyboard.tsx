import { FC } from "react";
import React from "react";
import { ThreeModelInterface } from "@/interfaces/ThreeModelInterface";
import ThreeModel from "../ThreeModel";

const Keyboard: FC = () => {
    const model: ThreeModelInterface = {
        url: "./models/keyboard/scene.gltf",
        scale: 1.5,
        objectPosition:  [0, -11, -20]
    }

    return (
        <ThreeModel {...model}/>
    )
}

export default Keyboard;