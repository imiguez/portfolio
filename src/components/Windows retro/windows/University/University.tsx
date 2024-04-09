import React, { useState } from 'react';
import { FC } from 'react';
import { BasicWindow } from '../../windows components/BasicWindow';
import { WindowInterface } from '@/interfaces/WindowInterface';
import { WindowProgramOptions } from '../../windows components/WindowProgramOptions';
import ProgramIconBtn from '../../ProgramIconBtn';
import { UniversityMock } from '@/assets/mocks/UniversityMock';

export const University: FC<{ window: WindowInterface }> = ({ window }) => {
  const [description, setDescription] = useState<string>('Select a technology to get more info.');

  return (
    <BasicWindow window={window} classes="university-exe" >
        <WindowProgramOptions />
        <section className="window-technologies-container">
          {UniversityMock.map(tech => <ProgramIconBtn {...tech}  onDoubleClick={() => setDescription(tech.description)}/>)}
          {UniversityMock.length % 2 != 0 &&
            <div className="university-exe-btn unselectable program-icon"></div>
          }
        </section>

        <section className='window-descriptions-container'>
          <p className="text color-black unselectable">{description}</p>
        </section>
      
      <footer>
        <p className="text color-black unselectable">{UniversityMock.length} object[s]</p>
      </footer>
    </BasicWindow>
  );
};
