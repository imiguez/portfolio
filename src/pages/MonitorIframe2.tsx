import * as React from 'react';
import { FC } from 'react';
import { OpenWindowBtn } from '@/components/OpenWindowBtn';
import TaskBar from '@/components/Windows retro/TaskBar';
import { useWindowsStore } from '@/store/windowsStore';

export const MonitorIframe2: FC = () => {
  const {windowsComponent} = useWindowsStore();

  return (
    <div className="windows-container">
      <div className="windows-container-bg-img"></div>
      <div className="windows-container-bg-img-2"></div>
      <div className="programs-container">

        {windowsComponent.map((window) => (window.component))}

        <OpenWindowBtn title="University" imgSrc="img/program-icon.png" />

        <OpenWindowBtn title="Self Taught" imgSrc="img/program-icon.png" />
      </div>

      <TaskBar></TaskBar>
    </div>
  );
};