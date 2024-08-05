import { ProgramIconBtnInterface } from '@/interfaces/MookInterfaces'
import React, { FC, useState } from 'react'

const ProgramIconBtn: FC<ProgramIconBtnInterface> = ({title, titleColor, icon, loading_icon, onDoubleClick, onClick}) => {
  const [wasLoaded, setWasLoaded] = useState(false);

  return (
    <button className="exe-btn unselectable" onDoubleClick={onDoubleClick} onClick={onClick}>
      <div style={{
        width: "40px",
        height: "40px",
        padding: "0 5px",
      }} >
        <div 
        style={{
          width: "40px",
          height: "40px",
          aspectRatio: 1,
          backgroundImage: wasLoaded ? "none" : `url('${loading_icon}'`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>

          <img style={{
            width: "100%", height: "100%", opacity: +wasLoaded,
            objectFit: "cover", objectPosition: "center"
            }}  src={icon} alt="" loading='lazy' onLoad={() => setWasLoaded(true)}/>
        </div>
      </div>

      <p className="text" style={{ color: titleColor }}>
        {title}
      </p>
    </button>
  )
}

export default ProgramIconBtn