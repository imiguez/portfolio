import { WindowInterface } from '@/interfaces/WindowInterface';
import React, { useState } from 'react';
import { FC } from 'react';
import ProgramIconBtn from '../../ProgramIconBtn';
import { SelfTaughtMock } from '@/assets/mocks/SelfTaughtMock';
import { BasicWindow } from '../../windowsComponents/BasicWindow';
import { WindowProgramOptions } from '../../windowsComponents/WindowProgramOptions';

export const SelfTaught: FC<{window: WindowInterface}> = ({ window }) => {
  const [description, setDescription] = useState<string>('Select a technology to get more info.');
  
  return (
    <BasicWindow window={window} >
      <WindowProgramOptions />

      <section className="window-technologies-container">
        {SelfTaughtMock.map(tech => <ProgramIconBtn {...tech} onDoubleClick={() => setDescription(tech.description)} />)}
      </section>

      <section className='window-descriptions-container'>
        <p className="text color-black unselectable">{description}</p>
      </section>

      <footer>
        <p className="text color-black unselectable">{SelfTaughtMock.length} object[s]</p>
      </footer>
    </BasicWindow>
  );
};