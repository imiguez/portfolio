import React from "react";
import { FC } from "react";

export const WindowProgramOptions: FC = () => {
  return (
    <div className="program-options unselectable">
      <p className="text text-retro color-black">File</p>
      <p className="text text-retro color-black">Edit</p>
      <p className="text text-retro color-black">View</p>
      <p className="text text-retro color-black">Help</p>
    </div>
  );
};