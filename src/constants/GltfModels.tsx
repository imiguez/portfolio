import { ThreeModelInterface } from "../interfaces/ThreeModelInterface";

export const oldMonitor: ThreeModelInterface = {
    name: "old-monitor",
    url: "./models/viewsonic_15_1546_crt_monitor/scene.gltf",
    // scale: 3,
    scale: 3,
    objectPosition: [-1, -.5, 0.8],
    rotation: [0, Math.PI/1.1, 0],
    // objectPosition: [10, -1, 0],
};

export const keyboard: ThreeModelInterface = {
    name: "keyboard",
    url: "./models/ibm_model_m_keyboard/scene.gltf",
    scale: 3,
    objectPosition: [-0, -0.5, -1],
    rotation: [0, Math.PI/1, 0],
};

export const desk: ThreeModelInterface = {
    name: "desk",
    url: "./models/metal_desk/scene.gltf",
    scale: 3,
    objectPosition: [-0, -1.9, 0],
    rotation: [0, Math.PI/1, 0],
};