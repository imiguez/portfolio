import React, { FC, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe: FC = () => {
  useEffect(() => {
    const defaults = {
      delay: 0.0,
      stagger: {
        amount: 0.4,
      },
    };
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        defaults: defaults,
        scrollTrigger: {
          trigger: ".about-me-container",
          start: "top 75%",
          end: "top 70%",
          markers: false,
          toggleActions: "restart play reverse reverse",
        },
      })
      .fromTo(".side-effect", { y: 220, ease: "power4.out", }, { y: 0 });

    gsap
      .timeline({
        defaults: defaults,
        scrollTrigger: {
          trigger: ".about-me-container",
          start: "top 15%",
          end: "top 10%",
          markers: false,
          toggleActions: "restart play reverse none",
        },
      })
      .to(".side-effect", { y: 220, ease: "power4.in" });
  });
  return (
    <>
      <div className="section about-me">
        <section className="about-me-container">
          <div className="side-effect-container">
            <h1 className="title side-effect">Hi, I'm Ignacio Miguez</h1>
          </div>

          <div className="subtitle-container side-effect-container">
            <img
              className="line-img side-effect"
              src="/img/line.png"
              alt="line"
            />
            <h2 className="subtitle side-effect">Fullstack developer</h2>
          </div>

          <div className="side-effect-container">
            <p className="about-me-text side-effect">
              I'm from <strong>Tandil, Argentina</strong>. I started to study
              Web Development at Unicen University at 2020. In the career I
              lerned the following technologies/concepts:
            </p>
          </div>
        </section>
      </div>

      <div className="section about-me-monitor"></div>
    </>
  );
};

export default AboutMe;