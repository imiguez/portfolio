import React, { FC } from "react";

const AboutMe: FC = () => {

    return (
        <>
          <div className="section about-me">
            <section className="about-me-container">
              <div className="">
                <h1 className="title side-effect">Hi, I'm Ignacio Miguez</h1>
              </div>

            <div className="subtitle-container">
              <img className="line-img side-effect" src="/img/line.png" alt="line" />
              <h2 className="subtitle side-effect">Fullstack developer</h2>
            </div>
            <p className="about-me-text">
              I'm from <strong>Tandil, Argentina</strong>. I started to study Web Development at Unicen 
              University at 2020. In the career I lerned the following technologies/concepts:
            </p>
          </section>
          </div>
          <div className="section about-me-monitor">

          </div>
        </>
      );
    };

export default AboutMe;