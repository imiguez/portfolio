import { WindowInterface } from '@/interfaces/WindowInterface';
import { useWindowsStore } from '@/store/windowsStore';
import React from 'react';
import { FC } from 'react';

interface TaskBarBtnInterface {
  window: WindowInterface;
}

export const TaskBarBtn: FC<TaskBarBtnInterface> = ({ window }) => {
  
  const { minimizeWindow } = useWindowsStore();

  return (
    <button
      ref={window.taskBarBtnRef}
      onClick={() => {
        minimizeWindow(window);
      }}
      className="university-task-bar-btn btn-selected"
    >
      <img className="program-icon mini-icon" src={window.icon} alt="" />
      <p className="text color-black">{window.title}</p>
    </button>
  );
}