import React, { useEffect } from 'react'
import 'pages/MobileApp/Sections/Projects/Projects.css';
import ImageLoader from './ImageLoader';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { exp1, exp2, projects, projects2 } from '@/constants/ScrollAnimations';

function Projects() {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.fromTo("body", exp2, projects);
        tl.fromTo("body", projects, projects2);
    }, []);

  return (
    <section id='projects'>
        <h2 className='title'>Projects</h2>
        <div className='projects-container'>
            <article className='project-container project-type-3 box-shadow' id='project-ride'>
                <ImageLoader src='img/Projects/ride.png' containerClassName='ride-image-container image-container' imageClassName='ride-image' />
            </article>
            <article className='project-container project-type-1 box-shadow'>
                <ImageLoader src='img/Projects/runnerGameBackgroundRemoved.png' containerClassName='image-container' backgroundGradient='linear-gradient(rgba(80,80,80,1), #80bbc6)'/>
            </article>
            <article className='project-container project-type-1 box-shadow'>
                <ImageLoader src='img/Projects/paint.png' containerClassName='paint-image-container image-container' imageClassName='paint-image' backgroundGradient='radial-gradient(circle at right bottom, rgb(57 68 85), rgb(87 99 117))'/>
            </article>
            <article className='project-container project-type-2 box-shadow' >
                <ImageLoader src='img/Projects/beerbee.png' containerClassName='beerbee-image-container image-container' imageClassName='beerbee-image' backgroundGradient='linear-gradient(rgba(80,80,80,1), rgba(20, 20, 20, 1))'/>
            </article>
        </div>
    </section>
  )
}

export default Projects