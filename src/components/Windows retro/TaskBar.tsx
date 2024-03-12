import { useWindowsStore } from '@/store/windowsStore';
import React, { useMemo, useState } from 'react';
import { TaskBarBtn } from './TaskBarBtn';
import { WindowInterface } from '@/interfaces/WindowInterface';
import NotificationsBtn from './windows components/NotificationsBtn';

const TaskBar = () => {
  const { windows } = useWindowsStore();
  const [taskBarBtns, setTaskBarBtns] = useState<WindowInterface[]>([]);

  useMemo(() => {
    if (taskBarBtns.length < windows.length) {
      setTaskBarBtns([...taskBarBtns, windows[windows.length - 1]]);
    }
    if (taskBarBtns.length > windows.length) {
      const newTaskBarBtns = taskBarBtns.filter((w) => windows.includes(w));
      setTaskBarBtns(newTaskBarBtns);
    }
  }, [windows.length]);

  return (
    <footer className="task-bar-background">
      <div className="task-bar">
        <div className="task-bar-subcontainer">
          <button className="start-btn" onClick={() => alert('click')}>
            <img className="start-image" src="img/windows-start.png" alt="" />
            <p className="text color-black">Start</p>
          </button>
          <div className="start-btn-separetor"></div>

          {taskBarBtns.map((window) => (<TaskBarBtn window={window} />))}

        </div>

        <NotificationsBtn />
      </div>
    </footer>
  );
};

export default TaskBar;