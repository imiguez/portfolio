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
        // gsap.registerPlugin(ScrollTrigger);
        // gsap.to('.background', {
        //     scrollTrigger: '.box', // start animation when ".box" enters the viewport
        //     x: 500
        // });
    }, []);

  return (
    <>
    {/* podria ir moviendose el fondo a medida que se escrollea usando GSAP */}
        <div className="background"/>
        <Nav></Nav>
        <Hero/>
        <Suspense fallback={<Loader/>}>
            <ContactMe/>
        </Suspense>
    </>
  )
}