import React, { FC, useState } from 'react'


interface IImageLoader {
    src: string,
    containerClassName?: string,
    imageClassName?: string,
    backgroundGradient?: string,
}

const ImageLoader: FC<IImageLoader> = ({ src, containerClassName, imageClassName, backgroundGradient }) => {
  const [wasLoaded, setWasLoaded] = useState(false);
  const [path, format] = src.split(".");

  return (
    <div className={containerClassName} style={{backgroundImage: (wasLoaded ? "" : `url(${path+"_opt."+format})`) + (!wasLoaded && backgroundGradient ? ", " : "") + (backgroundGradient ?? "")}} >
        <img src={path+"."+format} className={imageClassName} style={{opacity: +wasLoaded}} loading='lazy' onLoad={() => setWasLoaded(true)}/>
    </div>
  )
}

export default ImageLoader