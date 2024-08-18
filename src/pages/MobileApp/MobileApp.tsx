import React, { lazy, Suspense } from 'react'
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
            <Suspense fallback={<Loader/>}>
                <Projects/>
                <Suspense fallback={<Loader/>}>
                    <ContactMe/>
                </Suspense>
            </Suspense>
        </Suspense>
    </>
  )
}