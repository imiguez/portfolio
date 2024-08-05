import * as React from 'react';
import { FC, useEffect } from 'react';
import 'pages/DesktopApp/OS/OS.css';
import { useWindowsStore } from '@/store/windowsStore';
import { OpenWindowBtn } from '@/components/WindowsRetro/OpenWindowBtn';
import TaskBar from '@/components/WindowsRetro/TaskBar';

export const OS: FC = () => {
  const {windowsComponent, windows, focusWindow} = useWindowsStore();
    
  useEffect(() => {
    window.onmessage = ((event: any) => {
      let windowClicked = windows.find(w => w.title == event.data);
      if (windowClicked) focusWindow(windowClicked);
    });
  }, []);

  return (
    <div className="windows-container">
      <div className="windows-container-bg-img"></div>
      <div className="windows-container-bg-img-2"></div>
      <div className="programs-container">

        {windowsComponent.map((window) => (window.component))}

        <OpenWindowBtn classes='text-retro bold' title="University" icon="img/unicen-logo.png" loading_icon='img/unicen-logo-opt.png' titleColor='white' />

        <OpenWindowBtn classes='text-retro bold' title="Self Taught" icon="img/Windows retro icons/program-icon.png" loading_icon='img/Windows retro icons/program-icon.png' titleColor='white' />

        <OpenWindowBtn classes='text-retro bold' title="Projects" icon="img/Windows retro icons/program-icon.png" loading_icon='img/Windows retro icons/program-icon.png' titleColor='white' />
      </div>

      <TaskBar></TaskBar>
    </div>
  );
};