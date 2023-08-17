import { TaskBarBtnInterface } from "@/interfaces/WindowInterface";
import React from "react";
import { FC } from "react";

export const TaskBarBtn: FC<TaskBarBtnInterface> = ({
  minimize,
  taskBarRef,
  title,
}) => {
  return (
    <button
      ref={taskBarRef}
      onClick={() => {
        minimize();
      }}
      className="university-task-bar-btn btn-selected"
    >
      <img
        className="program-icon mini-icon"
        src="img/program-icon.png"
        alt=""
      />
      <p className="text color-black">{title}</p>
    </button>
  );
};
