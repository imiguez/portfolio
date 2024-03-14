import React, { useEffect } from "react";
import { FC } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProgress } from "@react-three/drei";

const LoadingMessage: FC = () => {
  const { progress } = useProgress();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    if (progress == 0) {
      tl.fromTo(".reveal-effect", {y: 200,}, {y: 0,
        ease: "power4.out",
        delay: .2,
        stagger: {
          amount: 0.4,
        },
      });
    }
    if (progress == 100) {
      setTimeout(() => {
        tl.fromTo(".reveal-effect", {y: 0,}, {y: 200,
          ease: "power4.in",
          delay: .2,
          stagger: {
            amount: 0.4,
          },
        });
      },1000);
    }
  }, [progress]);

  
  
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

export default LoadingMessage;
