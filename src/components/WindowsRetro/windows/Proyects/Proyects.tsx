import { ProyectsMock } from "@/assets/mocks/ProyectsMock";
import { WindowInterface } from "@/interfaces/WindowInterface";
import React from "react";
import { FC, useState } from "react";
import { OpenWindowBtn } from "../../OpenWindowBtn";
import { BasicWindow } from "../../windowsComponents/BasicWindow";
import { WindowProgramOptions } from "../../windowsComponents/WindowProgramOptions";


export const Proyects: FC<{window: WindowInterface}> = ({ window }) => {
  const [description, setDescription] = useState<string>('Select a proyect to get more info.');

  return (
    <BasicWindow window={window} >
      <WindowProgramOptions />

      <section className="window-technologies-container">
        {ProyectsMock.map(tech => (
          <OpenWindowBtn {...tech} titleColor="black" onClick={() => setDescription(tech.description)} />
        ))}
        {ProyectsMock.length % 2 != 0 &&
          <div className="university-exe-btn unselectable program-icon"></div>
        }
      </section>

      <section className='window-descriptions-container'>
        <p className="text color-black unselectable">{description}</p>
      </section>

      <footer>
        <p className="text color-black unselectable">{ProyectsMock.length} object[s]</p>
      </footer>
    </BasicWindow>
  );
};