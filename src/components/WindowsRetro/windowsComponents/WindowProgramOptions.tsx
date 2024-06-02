import React from "react";
import { FC } from "react";

export const WindowProgramOptions: FC = () => {
  return (
    <div className="program-options unselectable">
      <p className="text color-black">File</p>
      <p className="text color-black">Edit</p>
      <p className="text color-black">View</p>
      <p className="text color-black">Help</p>
    </div>
  );
};