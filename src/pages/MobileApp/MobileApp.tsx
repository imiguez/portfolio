import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { lazy, Suspense, useEffect } from 'react'
import 'pages/MobileApp/MobileApp.css';
import 'pages/MobileApp/Sections/Sections.css';
import Hero from './Sections/Hero/Hero'
import Nav from './Nav/Nav';

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
        tl.to(".background", {
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            background: 'linear-gradient(160deg, rgba(80,80,80,1), rgba(207, 207, 207, .6)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
            ease: 'none'
        });
    }, []);

  return (
    <>
        <div className="background" style={{height: window.outerHeight}}/>
        <Nav></Nav>
        <Hero/>
        <Suspense fallback={<Loader/>}>
            <ContactMe/>
        </Suspense>
    </>
  )
}