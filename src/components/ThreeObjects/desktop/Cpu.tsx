import { FC } from "react";
import ThreeModel from "../ThreeModel";
import React from "react";
import { ThreeModelInterface } from "@/interfaces/ThreeModelInterface";

const Cpu: FC = (props) => {
    const model: ThreeModelInterface = {
        url: "./models/cpu/scene.gltf",
        scale: 0.5,
        objectPosition: [35, 10, -15]
    }
    return (
        <ThreeModel {...model}/>
    )
}

export default Cpu;