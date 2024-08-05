import { useWindowsStore } from '@/store/windowsStore';
import React, { MutableRefObject, useRef } from 'react';
import { FC } from 'react';
import { University } from './windows/University/University';
import { SelfTaught } from './windows/SelfTaught/SelfTaught';
import ProgramIconBtn from './ProgramIconBtn';
import { ProgramIconBtnInterface } from '@/interfaces/MookInterfaces';
import { Projects } from './windows/Projects/Projects';
import { Beerbee } from './windows/Projects/Beerbee';
import { Filters } from './windows/Projects/Filters';
import { RunnerGame } from './windows/Projects/RunnerGame';


export const OpenWindowBtn: FC<ProgramIconBtnInterface> = (params) => {
  const { openWindow, windows } = useWindowsStore();
  const taskBarBtnRef = useRef<MutableRefObject<any>>();
  const windowRef = useRef<MutableRefObject<any>>();
  
  const onDoubleClick = () => {
    if (params.title == 'Ride') {
      open("https://play.google.com/store/apps/details?id=com.imiguez.ride&pcampaignid=web_share");
      return;
    }
    if (windows.find((w) => w.title == params.title) != undefined) return;
    const window = {
      windowRef: windowRef,
      taskBarBtnRef: taskBarBtnRef,
      title: params.title,
      icon: params.icon ?? 'img/program-icon.png'
    };
    let windowComponent;
    switch (params.title) {
      case 'University':
        windowComponent = <University window={window} />;
      break;
      case 'Self Taught':
        windowComponent = <SelfTaught window={window} />;
      break;
      case 'Projects':
        windowComponent = <Projects window={window} />;
      break;
      case 'Beerbee':
        windowComponent = <Beerbee window={window} />;
      break;
      case 'Paint & Filters':
        windowComponent = <Filters window={window} />;
      break;
      case 'Runner Game':
        windowComponent = <RunnerGame window={window} />;
      break;
      default:
        windowComponent = <p>Not Found window.</p>
      break;
    }

    openWindow(window, windowComponent);
  };

  return (
    <ProgramIconBtn {...{...params, onDoubleClick: onDoubleClick }} />
  );
};