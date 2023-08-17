import React from "react";
import { FC } from "react";

interface OpenWindowBtnInterface {
    title: string,
    titleColor?: string,
    onDoubleClick: () => void;
    imgSrc: string;
}

export const OpenWindowBtn: FC<OpenWindowBtnInterface> = ({onDoubleClick, imgSrc, title, titleColor = 'white'}) => {
  return (
    <button
      onDoubleClick={() => {
        onDoubleClick();
      }}
      className="university-exe-btn"
    >
      <img className="program-icon" src={imgSrc} alt="" />
      <p className="text" style={{color: titleColor}}>{title}</p>
    </button>
  );
};
