import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [wasLoaded, setWasLoaded] = useState(false);

  return (
    <section id="home" className="section">
      <h1 className="hero-title">Ignacio Miguez</h1>
      <h2 className="hero-subtitle">Software Developer</h2>
      <p className="hero-description">
        Versatile <strong>Full Stack developer</strong> with a passion for crafting innovative solutions. Proven ability to quickly <strong>learn</strong> and <strong>adapt</strong> to new technologies
        and challenges.
      </p>

      <div className='guy-greeting-loader' style={{backgroundImage: wasLoaded ? "none" : `url(img/Mobile/guy-greeting_opt.png)`,}}>
        <img src="img/Mobile/guy-greeting.png" className="guy-greeting" style={{opacity: +wasLoaded}} loading='lazy' onLoad={() => setWasLoaded(true)}/>
      </div>


      <svg id='svg' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id='gradient' x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#430f58"/>
            <stop offset="25%" stopColor="#621481"/>
            <stop offset="50%" stopColor="#7f15a9"/>
            <stop offset="100%" stopColor="#9612ca"/>
          </linearGradient>
        </defs>
        <path id='path' fill="url(#gradient)" transform="translate(100 110) scale(1.05)" 
        >
          <animate attributeName='d' 
          dur="15s" repeatCount="indefinite" begin="0s" 
            values="M49,-55.9C64.6,-45.2,79.3,-30.9,84.1,-13.4C88.9,4.1,83.8,24.8,73.6,42.5C63.4,60.1,47.9,74.7,30.1,80.1C12.2,85.6,-8.1,81.8,-26.9,74.6C-45.6,67.4,-62.9,56.8,-73,41.2C-83.2,25.6,-86.3,4.9,-82.6,-14.4C-79,-33.7,-68.7,-51.6,-53.8,-62.5C-38.9,-73.3,-19.5,-77,-1.4,-75.3C16.7,-73.7,33.3,-66.6,49,-55.9Z;

            M47.5,-56.7C62.7,-43.9,76.9,-30,79.7,-14.1C82.5,1.8,73.8,19.7,63.2,34.9C52.6,50.1,39.9,62.6,24.3,69.4C8.6,76.3,-10,77.5,-25.5,71.4C-41.1,65.2,-53.4,51.6,-64,35.8C-74.5,19.9,-83.2,1.9,-80.8,-14.7C-78.4,-31.2,-64.9,-46.2,-49.5,-59C-34.2,-71.8,-17.1,-82.5,-0.5,-81.9C16.2,-81.4,32.3,-69.6,47.5,-56.7Z;
            
            M46.5,-56.9C59.8,-44.3,69.7,-29.2,73.8,-12.1C77.9,5,76.3,24.1,67.6,39.1C59,54.1,43.4,65.2,26.3,70.7C9.2,76.3,-9.3,76.5,-26,70.7C-42.7,65,-57.4,53.3,-67.1,38C-76.8,22.7,-81.5,3.8,-80,-15.8C-78.6,-35.4,-71.2,-55.7,-56.8,-68.1C-42.5,-80.5,-21.2,-85,-2.3,-82.3C16.6,-79.5,33.3,-69.5,46.5,-56.9Z;

            M48.2,-57.6C64.2,-44,80,-30.5,83.2,-14.3C86.5,1.8,77.1,20.4,66.7,38.5C56.2,56.6,44.8,74,28.8,80.3C12.9,86.5,-7.5,81.6,-25.8,73.7C-44.1,65.8,-60.4,55,-70.3,39.7C-80.2,24.4,-83.7,4.5,-81.4,-15.3C-79.1,-35.2,-70.9,-55,-56.4,-68.8C-41.8,-82.7,-20.9,-90.7,-2.4,-87.8C16.1,-84.9,32.2,-71.2,48.2,-57.6Z;

            M58.3,-68.7C74.4,-55.9,85.5,-36.5,89,-15.8C92.5,4.9,88.5,26.8,78,45C67.4,63.1,50.4,77.4,32,81C13.7,84.7,-6,77.6,-23.6,69.3C-41.2,61,-56.7,51.3,-68.3,36.8C-79.8,22.2,-87.4,2.7,-83.6,-14C-79.8,-30.7,-64.5,-44.7,-48.7,-57.5C-32.8,-70.2,-16.4,-81.8,2.3,-84.5C21.1,-87.3,42.2,-81.4,58.3,-68.7Z;
            
            M49,-55.9C64.6,-45.2,79.3,-30.9,84.1,-13.4C88.9,4.1,83.8,24.8,73.6,42.5C63.4,60.1,47.9,74.7,30.1,80.1C12.2,85.6,-8.1,81.8,-26.9,74.6C-45.6,67.4,-62.9,56.8,-73,41.2C-83.2,25.6,-86.3,4.9,-82.6,-14.4C-79,-33.7,-68.7,-51.6,-53.8,-62.5C-38.9,-73.3,-19.5,-77,-1.4,-75.3C16.7,-73.7,33.3,-66.6,49,-55.9Z" ></animate>
        </path>
      </svg>

    </section>
  );
}