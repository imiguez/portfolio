import { useWindowsStore } from '@/store/windowsStore';
import React, { MutableRefObject, useRef } from 'react';
import { FC } from 'react';
import { University } from './Windows retro/windows/University';
import { SelfTaught } from './Windows retro/windows/SelfTaught';
import { Beerbee } from './Windows retro/windows/Beerbee';

interface OpenWindowBtnInterface {
  title: string;
  titleColor?: string;
  imgSrc: string;
}

export const OpenWindowBtn: FC<OpenWindowBtnInterface> = ({ imgSrc, title, titleColor = 'white' }) => {
  const { openWindow, windows } = useWindowsStore();
  const taskBarBtnRef = useRef<MutableRefObject<any>>();
  const windowRef = useRef<MutableRefObject<any>>();

  const handleDoubleClick = () => {
    if (windows.find((w) => w.title == title) != undefined) return;
    const window = {
      windowRef: windowRef,
      taskBarBtnRef: taskBarBtnRef,
      title: title,
    };
    let windowComponent;
    switch (title) {
      case 'University':
        windowComponent = <University window={window} />;
        break;
      case 'Self Taught':
        windowComponent = <SelfTaught window={window} />;
        break;
      case 'Beerbee':
        windowComponent = <Beerbee window={window} />;
        break;
    }

    openWindow(window, windowComponent);
  };

  return (
    <button onDoubleClick={handleDoubleClick} className="university-exe-btn unselectable">
      <img className="program-icon" src={imgSrc} alt="" />
      <p className="text" style={{ color: titleColor }}>
        {title}
      </p>
    </button>
  );
};
