import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { lazy, Suspense, useEffect } from 'react'
import 'pages/MobileApp/MobileApp.css';
import 'pages/MobileApp/Sections/Sections.css';
import Hero from './Sections/Hero/Hero'
import Nav from './Nav/Nav';

const Experience = lazy(() => (import('./Sections/Experience/Experience')));
const Projects = lazy(() => (import('./Sections/Projects/Projects')));
const ContactMe = lazy(() => (import('./Sections/ContactMe/ContactMe')));

    function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 200000);
    }).then(() => promise);
}

const Loader = () => (
<div className='loader-container'>
    <div className="loader"/>
</div>)

export default function MobileApp() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.to("body", {
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            background: 'linear-gradient(160deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
            ease: 'none'
        });
    }, []);

  return (
    <>
        <Nav></Nav>
        <span style={{position: 'absolute', top: '5vh', width: '100%'}}>
            <p style={{textAlign: "center"}}>🛠️ Still working on! 🛠️</p>
            <p style={{textAlign: "center"}}>⚠️ Sections could be missing ⚠️</p>
        </span>
        <Hero/>
        <Suspense fallback={<Loader/>}>
            <Experience/>
        </Suspense>
        <Suspense fallback={<Loader/>}>
            <Projects/>
        </Suspense>
        <Suspense fallback={<Loader/>}>
            <ContactMe/>
        </Suspense>
    </>
  )
}