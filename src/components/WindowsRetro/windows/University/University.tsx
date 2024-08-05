import React, { useState } from 'react';
import { FC } from 'react';
import { WindowInterface } from '@/interfaces/WindowInterface';
import ProgramIconBtn from '../../ProgramIconBtn';
import { UniversityMock } from '@/assets/mocks/UniversityMock';
import { BasicWindow } from '../../windowsComponents/BasicWindow';
import { WindowProgramOptions } from '../../windowsComponents/WindowProgramOptions';

export const University: FC<{ window: WindowInterface }> = ({ window }) => {
  const [description, setDescription] = useState<string>('Select a technology to get more info.');

  return (
    <BasicWindow window={window} classes="university-exe" >
        <WindowProgramOptions />
        <section className="window-technologies-container">
          {UniversityMock.map(tech => <ProgramIconBtn {...tech}  onDoubleClick={() => setDescription(tech.description)}/>)}
        </section>

        <section className='window-descriptions-container'>
          <p className="text color-black unselectable">{description}</p>
        </section>
      
      <footer>
        <p className="text text-retro text-small color-black unselectable">{UniversityMock.length} object[s]</p>
      </footer>
    </BasicWindow>
  );
};
