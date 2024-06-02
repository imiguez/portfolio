import { ProgramIconBtnInterface } from '@/interfaces/MookInterfaces'
import React, { FC } from 'react'

const ProgramIconBtn: FC<ProgramIconBtnInterface> = ({title, titleColor, icon, onDoubleClick, onClick}) => {

  return (
    <button className="university-exe-btn unselectable" onDoubleClick={onDoubleClick} onClick={onClick}>
      <img className="program-icon" src={icon} alt="" />
      <p className="text" style={{ color: titleColor }}>
        {title}
      </p>
    </button>
  )
}

export default ProgramIconBtn