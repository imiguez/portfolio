import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [wasLoaded, setWasLoaded] = useState(false);

  let paths = [
    "M43.7,-58.7C56.2,-51.1,65.6,-37.7,69.9,-23.1C74.1,-8.4,73.2,7.5,69.6,23.9C66,40.2,59.8,56.9,47.7,65.5C35.6,74.1,17.8,74.6,0.8,73.5C-16.2,72.4,-32.4,69.7,-45.4,61.4C-58.3,53,-67.9,39.1,-73.6,23.4C-79.3,7.8,-81.2,-9.6,-78,-27.2C-74.8,-44.7,-66.5,-62.5,-52.7,-69.7C-38.9,-76.9,-19.4,-73.6,-1.9,-70.9C15.6,-68.3,31.2,-66.3,43.7,-58.7Z",
    "M62.5,-48.8C76.2,-32.6,79.3,-6.9,72.1,13.1C64.8,33,47.2,47.3,28.8,53.9C10.3,60.6,-9,59.7,-27.1,52.4C-45.2,45.2,-62.2,31.6,-68.3,13.2C-74.4,-5.2,-69.7,-28.5,-56.5,-44.7C-43.3,-60.8,-21.7,-69.7,1.4,-70.8C24.4,-71.8,48.7,-65.1,62.5,-48.8Z", "M46.6,-45.4C62.1,-31.1,77.6,-15.6,81.5,3.8C85.3,23.2,77.5,46.5,62,59.2C46.5,71.8,23.2,73.9,-0.1,74C-23.4,74.1,-46.7,72.1,-60.9,59.4C-75,46.7,-80,23.4,-78.7,1.3C-77.4,-20.7,-69.8,-41.5,-55.7,-55.8C-41.5,-70.2,-20.7,-78.1,-2.6,-75.5C15.6,-72.9,31.1,-59.8,46.6,-45.4Z", "M62.5,-48.8C76.2,-32.6,79.3,-6.9,72.1,13.1C64.8,33,47.2,47.3,28.8,53.9C10.3,60.6,-9,59.7,-27.1,52.4C-45.2,45.2,-62.2,31.6,-68.3,13.2C-74.4,-5.2,-69.7,-28.5,-56.5,-44.7C-43.3,-60.8,-21.7,-69.7,1.4,-70.8C24.4,-71.8,48.7,-65.1,62.5,-48.8Z",
    "M44.4,-64.3C56.5,-52.2,64.8,-38,72.3,-21.9C79.8,-5.7,86.5,12.3,82.5,27.4C78.4,42.5,63.6,54.8,48,64.3C32.5,73.9,16.2,80.8,1.4,78.8C-13.4,76.9,-26.9,66.2,-42.5,56.7C-58.2,47.2,-76.1,38.9,-84.9,24.6C-93.7,10.3,-93.4,-10,-84.5,-24.3C-75.5,-38.7,-57.9,-47.1,-42.4,-58.1C-26.9,-69,-13.4,-82.5,1.3,-84.4C16.1,-86.2,32.2,-76.3,44.4,-64.3Z",
    "M38.2,-53.6C48.7,-45.1,55.6,-32.7,63.5,-18.3C71.4,-3.9,80.4,12.6,77.7,26.7C75.1,40.7,60.9,52.4,46,59.9C31.1,67.4,15.5,70.6,0.9,69.4C-13.7,68.1,-27.4,62.4,-40.8,54.4C-54.1,46.4,-67,36.2,-71.6,23C-76.3,9.8,-72.7,-6.3,-67.5,-21.8C-62.3,-37.4,-55.6,-52.3,-44.1,-60.4C-32.6,-68.6,-16.3,-69.9,-1.2,-68.2C13.9,-66.6,27.8,-62,38.2,-53.6Z"
  ];

  const animation2 = () => {
    let p1 = 0;
    let p2 = 1;

    KUTE.fromTo('#path',
      {path: paths[p1]},
      {path: paths[p2]},
      {duration: 2000, easing: "easingSinusoidalInOut"}
    )
    .start();
    p1++;
    p2++;

    setInterval(() => {
      KUTE.fromTo('#path',
        {path: paths[p1]},
        {path: paths[p2]},
        {duration: 2000, easing: "easingSinusoidalInOut"}
      )
      .start();
      
      if (p2+1 == paths.length) p2 = 0;
      else p2++;

      if (p1+1 == paths.length) p1 = 0;
      else p1++;

    }, 2000);
  }

  useEffect(() => {
    animation2();
  }, []);

  return (
    <section id="home" className="section">
      <h1 className="hero-title">Hi, I'm Ignacio.</h1>
      <h2 className="hero-subtitle">Software Developer</h2>
      <p className="hero-description">
        Versatile <strong>Full Stack developer</strong> with a passion for crafting innovative solutions. Proven ability to quickly <strong>learn</strong> and <strong>adapt</strong> to new technologies
        and challenges.
      </p>

      <div className='guy-greeting-loader' style={{backgroundImage: wasLoaded ? "none" : `url(img/Mobile/guy-greeting_opt.png)`,}}>
        <img src="img/Mobile/guy-greeting.png" className="guy-greeting" style={{opacity: +wasLoaded}} loading='lazy' onLoad={() => setWasLoaded(true)}/>
      </div>


      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id='gradient' x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#430f58"/>
            <stop offset="25%" stopColor="#621481"/>
            <stop offset="50%" stopColor="#7f15a9"/>
            <stop offset="100%" stopColor="#9612ca"/>
          </linearGradient>
        </defs>
        <path id='path' fill="url(#gradient)" transform="translate(100 110) scale(1.05)" d='M43.7,-58.7C56.2,-51.1,65.6,-37.7,69.9,-23.1C74.1,-8.4,73.2,7.5,69.6,23.9C66,40.2,59.8,56.9,47.7,65.5C35.6,74.1,17.8,74.6,0.8,73.5C-16.2,72.4,-32.4,69.7,-45.4,61.4C-58.3,53,-67.9,39.1,-73.6,23.4C-79.3,7.8,-81.2,-9.6,-78,-27.2C-74.8,-44.7,-66.5,-62.5,-52.7,-69.7C-38.9,-76.9,-19.4,-73.6,-1.9,-70.9C15.6,-68.3,31.2,-66.3,43.7,-58.7Z'>
        </path>
      </svg>

    </section>
  );
}