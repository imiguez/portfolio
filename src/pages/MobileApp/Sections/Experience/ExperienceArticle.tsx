import React, { FC, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IExperienceArticle {
    title: string,
    dateFrom: string,
    dateTo: string,
    companyImgUrl: string,
    description: string[];
}

const ExperienceArticle: FC<IExperienceArticle> = ({ title, dateFrom, dateTo, companyImgUrl, description }) => {
    const r = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.from(r.current, {
            scrollTrigger: {
                trigger: r.current,
                start: "top 70%",
                end: "top 70%",
                scrub: 4,
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            ease: 'power2.inOut',

        });
    }, []);

  return (
    <article ref={r} className={`experience-container box-shadow`} >
        <div className='experience-point box-shadow'/>
        <header>
            <div>
                <h3 className='experience-title'>{title}</h3>
                <p className='experience-date'>{dateFrom} <span style={{color: '#dbdbdbd9'}}>•</span> {dateTo}</p>
            </div>
                <img src={companyImgUrl} loading='lazy' className='company-banner box-shadow'/>
        </header>
        <div className='experience-header-bar box-shadow'/>
        {description.map((d, i) => (
            <p className='experience-description' key={i}>{d}</p>

        ))}
    </article>
  )
}

export default ExperienceArticle