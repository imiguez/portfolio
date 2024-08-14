import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import './Hero.css';

type Particles = {
  size: number,
  initialRotation: string,
  top: number,
  left: number,
  directioX: 'right' | 'left' | null,
  directioY: 'top' | 'bottom' | null,
  opacity: number,
}

export default function Hero() {
  const [wasLoaded, setWasLoaded] = useState(false);
  
  const particles: Particles[] = [{
      size: 10,
      initialRotation: '48deg',
      top: (window.outerHeight*(1/3)) + 30,
      left: (window.innerWidth*(1/4)) + 30,
      directioX: 'left',
      directioY: 'bottom',
      opacity: .2,
    }, {
      size: 12,
      initialRotation: '8deg',
      top: (window.outerHeight*(1/4)) + 30,
      left: (window.innerWidth*(1/4)) - 30,
      directioX: 'left',
      directioY: null,
      opacity: .25,
    }, {
      size: 15,
      initialRotation: '100deg',
      top: (window.outerHeight*(1/3)) - 0,
      left: (window.innerWidth*(2/4)) + 30,
      directioX: 'right',
      directioY: 'bottom',
      opacity: .3,
    }, {
      size: 15,
      initialRotation: '100deg',
      top: (window.outerHeight*(1/4)) - 20,
      left: (window.innerWidth*(2/4)) + 30,
      directioX: 'right',
      directioY: 'top',
      opacity: .5,
    }, {
      size: 20,
      initialRotation: '220deg',
      top: (window.outerHeight*(1/4)) - 20,
      left: (window.innerWidth*(1/4)) + 0,
      directioX: 'right',
      directioY: 'top',
      opacity: .2,
    }, {
      size: 18,
      initialRotation: '140deg',
      top: (window.outerHeight*(1/4)) + 30,
      left: (window.innerWidth*(3/4)) + 0,
      directioX: 'right',
      directioY: 'bottom',
      opacity: .0,
    }, {
      size: 8,
      initialRotation: '40deg',
      top: (window.outerHeight*(1/4)) + 20,
      left: (window.innerWidth*(2/4)) + 0,
      directioX: 'left',
      directioY: null,
      opacity: .1,
    }, {
      size: 12,
      initialRotation: '60deg',
      top: (window.outerHeight*(1/4)) - 30,
      left: (window.innerWidth*(1/4)) + 30,
      directioX: 'left',
      directioY: null,
      opacity: .1,
    }, {
      size: 18,
      initialRotation: '140deg',
      top: (window.outerHeight*(1/2)) - 30,
      left: (window.innerWidth*(3/4)) - 30,
      directioX: 'right',
      directioY: 'top',
      opacity: .1,
    }, {
      size: 22,
      initialRotation: '240deg',
      top: (window.outerHeight*(1/2)) - 30,
      left: (window.innerWidth*(2/4)) - 30,
      directioX: 'left',
      directioY: 'bottom',
      opacity: .06,
    }, {
      size: 12,
      initialRotation: '200deg',
      top: (window.outerHeight*(1/3)) + 10,
      left: (window.innerWidth*(2/4)) - 20,
      directioX: 'left',
      directioY: 'bottom',
      opacity: .06,
    }, {
      size: 13,
      initialRotation: '200deg',
      top: (window.outerHeight*(1/3)) + 40,
      left: (window.innerWidth*(2/4)) - 0,
      directioX: 'right',
      directioY: 'bottom',
      opacity: .06,
    }, {
      size: 13,
      initialRotation: '150deg',
      top: (window.outerHeight*(1/3)) + 30,
      left: (window.innerWidth*(2/4)) + 20,
      directioX: 'right',
      directioY: 'top',
      opacity: .06,
    }, {
      size: 15,
      initialRotation: '250deg',
      top: (window.outerHeight*(1/3)) + 40,
      left: (window.innerWidth*(2/4)) - 20,
      directioX: 'left',
      directioY: 'top',
      opacity: .06,
    },
  ];

  const ScrollTriggerOptions = {
    trigger: "#home",
    start: "top top",
    end: "bottom top",
    scrub: 1.5,
    ease: 'easeOut'
  };


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    for (let i = 0; i < particles.length; i++) {
      tl.to(`.particle-${i}`, {
        scrollTrigger: ScrollTriggerOptions,
        rotate: (i+1)%2==0 ? '-90deg' : '90deg',
        opacity: (i+1)%2==0 ? .9 : .75,
        translateX: (!particles[i].directioX ? 0 : particles[i].directioX == 'left' ? -window.innerWidth : window.innerWidth) + 'px',
        translateY: (!particles[i].directioY ? -window.outerHeight*.2 : particles[i].directioY == 'top' ? -window.outerHeight*.2 : window.outerHeight*.2) + 'px',
        transform: 'scale(1.5)',
      });
    }
  }, []);

  return (
    <section id="home" className="section">
      <section className='hero-section'>
        <h1 className="hero-title">Ignacio Miguez</h1>
        <h2 className="hero-subtitle">Software Developer</h2>
        <p className="hero-description">
          Versatile <strong>Full Stack developer</strong> with a passion for crafting innovative solutions. Proven ability to quickly <strong>learn</strong> and <strong>adapt</strong> to new technologies
          and challenges.
        </p>
        {particles.map((p, i) => <span className={`particles particle-${i}`} key={i} style={{
          top: p.top+'px',
          left: p.left+'px',
          width: p.size+'px',
          height: p.size+'px',
          opacity: p.opacity,
          rotate: p.initialRotation
        }}/>)}

      </section>

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
        <path id='path' fill="url(#gradient)" transform="translate(100 110)" />
      </svg>

    </section>
  );
}