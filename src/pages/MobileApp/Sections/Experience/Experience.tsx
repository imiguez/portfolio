import 'pages/MobileApp/Sections/Experience/Experience.css';
import React, { useEffect } from 'react'
import ExperienceArticle from './ExperienceArticle';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { exp2, exp1, home } from '@/constants/ScrollAnimations';

function Experience() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.fromTo("body", home, exp1);
        tl.fromTo("body", exp1, exp2);

        const scroll = {
            trigger: "#experience",
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1,
        }

        tl.fromTo(".side-bar", {
            scrollTrigger: scroll,
            height: 0,
            ease: 'power2.in',
        }, {
            scrollTrigger: scroll,
            height: "auto",
            ease: 'power2.in',
        });
    }, []);

  return (
    <section className='section' id='experience'>
        <h2 className='title text-gradient-effect'>Experience</h2>
        <article className='experience-main-container'>
            <div className='side-bar'/>
            <div className='experiences-container'>
                <ExperienceArticle title='QA Automation - Tsoft' dateFrom='Aug 2021' dateTo='Jan 2023' companyImgUrl='img/tsoft.png' description={[
                    "Automatized and performed test cases for web and SAP applications leveraging a Selenium based tool.",
                    "Designed SQL queries to get users that comply with specific requirements based on each case, fill inputs with valid data and perform process validations."
                ]}/>
                <ExperienceArticle title='Freelance Web Development - Flightq' dateFrom='Dec 2020' dateTo='Feb 2021' companyImgUrl='img/flightq.png' description={[
                    "Developed intuitive user interfaces for multiple components of the flight quotation system.",
                    "Implemented CRUD functionalities for flight quotations."
                ]}/>
            </div>
        </article>
    </section>
  )
}

export default Experience