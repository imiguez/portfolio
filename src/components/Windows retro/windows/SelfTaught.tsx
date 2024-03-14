import { OpenWindowBtn } from '@/components/OpenWindowBtn';
import { WindowInterface } from '@/interfaces/WindowInterface';
import React from 'react';
import { FC } from 'react';
import { BasicWindow } from '../windows components/BasicWindow';
import { WindowProgramOptions } from '../windows components/WindowProgramOptions';

export const SelfTaught: FC<{window: WindowInterface}> = ({ window }) => {
  
  return (
    <BasicWindow window={window} >
      <WindowProgramOptions />

      <section className="university-section">
        <OpenWindowBtn
          title="TypeScript"
          titleColor="black"
          imgSrc={'img/TYPESCRIPT_icon.png'}
        />
      </section>

      <footer>
        <p className="text color-black unselectable">5 object[s]</p>
      </footer>
    </BasicWindow>
  );
};
