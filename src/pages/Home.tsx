import React, { useEffect } from "react";
import { FC } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
        delay: .2,
        stagger: {
          amount: 0.4,
        },
      },
      scrollTrigger: {
        trigger: ".welcome-container",
        start: "top 26%",
        end: "top 24%",
        markers: false,
        toggleActions: "restart reverse restart reverse"
      }
    });

    tl.fromTo(".reveal-effect", {y: 200,}, {y: 0,});
  });

  return (
    <>
      <div className="section homepage">
        <section className="welcome-container">
          <div className="reveal-effect-container">
            <h1 className="title welcome-title reveal-effect">Welcome to</h1>
          </div>
          <div className="reveal-effect-container">
            <h1 className="title welcome-title reveal-effect">my portfolio!</h1>
          </div>
          <div className="subtitle-container reveal-effect-container">
            <img className="line-img reveal-effect" src="/img/line.png" alt="line" />
            <h2 className="subtitle reveal-effect">Just enjoy it.</h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
