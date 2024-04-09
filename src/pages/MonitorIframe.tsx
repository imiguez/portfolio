import * as React from 'react';
import { FC } from 'react';
import TaskBar from '@/components/Windows retro/TaskBar';
import { useWindowsStore } from '@/store/windowsStore';
import { OpenWindowBtn } from '@/components/Windows retro/OpenWindowBtn';

export const MonitorIframe: FC = () => {
  const {windowsComponent} = useWindowsStore();

  return (
    <div className="windows-container">
      <div className="windows-container-bg-img"></div>
      <div className="windows-container-bg-img-2"></div>
      <div className="programs-container">

        {windowsComponent.map((window) => (window.component))}

        <OpenWindowBtn title="University" icon="img/unicen-short-logo.jpg" titleColor='white' />

        <OpenWindowBtn title="Self Taught" icon="img/Windows retro icons/program-icon.png" titleColor='white' />

        <OpenWindowBtn title="Proyects" icon="img/Windows retro icons/program-icon.png" titleColor='white' />
      </div>

      <TaskBar></TaskBar>
    </div>
  );
};