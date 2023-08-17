import { WindowHeaderInterface } from "@/interfaces/WindowInterface";
import React from "react";
import { FC } from "react";
import { FaRegWindowMaximize, FaRegWindowMinimize } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const WindowHeader: FC<WindowHeaderInterface> = ({
  title,
  minimize,
  maximize,
  close,
}) => {
  return (
    <header className="program-header">
      <div>
        <img
          className="program-icon mini-icon"
          src="img/program-icon.png"
          alt=""
        />
        <p className="text color-white bold">{title}</p>
      </div>
      <div>
        <button
          className="window-btn"
          onClick={() => {
            minimize();
          }}
        >
          <FaRegWindowMinimize className="minimize-icon" />
        </button>
        <button
          className="window-btn"
          onClick={() => {
            maximize();
          }}
        >
          <FaRegWindowMaximize className="maximize-icon" />
        </button>
        <button
          className="window-btn"
          onClick={() => {
            close();
          }}
        >
          <IoCloseSharp className="close-icon" />
        </button>
      </div>
    </header>
  );
};