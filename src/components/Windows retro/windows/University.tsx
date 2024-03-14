import { OpenWindowBtn } from '@/components/OpenWindowBtn';
import React from 'react';
import { FC } from 'react';
import { UniversityTechs } from '@/assets/mocks/UniversityMock';
import { BasicWindow } from '../windows components/BasicWindow';
import { WindowInterface } from '@/interfaces/WindowInterface';
import { WindowProgramOptions } from '../windows components/WindowProgramOptions';

export const University: FC<{ window: WindowInterface }> = ({ window }) => {
  return (
    <BasicWindow window={window} classes="university-exe" >
      <WindowProgramOptions />

      <section className="university-section">
        {/* {UniversityTechs.map(tech => {
            <OpenWindowBtn {...tech} />
          })} */}

        <OpenWindowBtn title="Beerbee" imgSrc="img/program-icon.png" />
      </section>

      <footer>
        <p className="text color-black unselectable">{UniversityTechs.length} object[s]</p>
      </footer>
    </BasicWindow>
  );
};
