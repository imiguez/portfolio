import React, { useEffect } from 'react'
import 'pages/MobileApp/Sections/Projects/Projects.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { exp2, projects, projects2 } from '@/constants/ScrollAnimations';
import { wrapGrid } from 'animate-css-grid';
import Ride from './Ride/Ride';
import Beerbee from './Beerbee/Beerbee';
import RunnerGame from './RunnerGame/RunnerGame';
import Paint from './Paint/Paint';

function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    
    useEffect(() => {
        tl.fromTo("body", exp2, projects);
        tl.fromTo("body", projects, projects2);
        
        wrapGrid(document.querySelector(".projects-container"), {
            stagger: 100,
            duration: 800,
            easing: 'linear',
        });

    }, []);

  return (
    <section id='projects'>
        <h2 className='title text-gradient-effect'>Projects</h2>
        <div className='projects-container'>
            <Ride/>
            <Beerbee/>
            <RunnerGame/>
            <Paint/>
        </div>
    </section>
  )
}

export default Projects