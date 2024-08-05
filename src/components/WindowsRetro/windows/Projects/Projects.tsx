import { ProjectsMock } from "@/assets/mocks/ProjectsMock";
import { WindowInterface } from "@/interfaces/WindowInterface";
import React from "react";
import { FC, useState } from "react";
import { OpenWindowBtn } from "../../OpenWindowBtn";
import { BasicWindow } from "../../windowsComponents/BasicWindow";
import { WindowProgramOptions } from "../../windowsComponents/WindowProgramOptions";


export const Projects: FC<{window: WindowInterface}> = ({ window }) => {
  const [description, setDescription] = useState<string>('Select a project to get more info.');

  return (
    <BasicWindow window={window} >
      <WindowProgramOptions />

      <section className="window-technologies-container">
        {ProjectsMock.map(tech => (
          <OpenWindowBtn {...tech} titleColor="black" onClick={() => setDescription(tech.description)} />
        ))}
      </section>

      <section className='window-descriptions-container'>
        <p className="text color-black unselectable">{description}</p>
      </section>
      <footer>
        <p className="text text-retro text-small color-black unselectable">{ProjectsMock.length} object[s]</p>
      </footer>
    </BasicWindow>
  );
};