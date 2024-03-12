import { OpenWindowBtn } from '@/components/OpenWindowBtn';
import React from 'react';
import { FC } from 'react';
import { UniversityTechs } from '@/assets/mocks/UniversityMock';
import { BasicWindow } from '../windows components/BasicWindow';
import { WindowInterface } from '@/interfaces/WindowInterface';

export const University: FC<{ window: WindowInterface }> = ({ window }) => {
  return (
    <BasicWindow window={window} classes="university-exe" >
      <div className="program-options unselectable">
        <p className="text color-black">File</p>
        <p className="text color-black">Edit</p>
        <p className="text color-black">View</p>
        <p className="text color-black">Help</p>
      </div>

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
