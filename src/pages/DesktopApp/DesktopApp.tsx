import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import 'pages/DesktopApp/DesktopApp.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';
import { ThreeJsCanvas } from './ThreeJsCanvas/ThreeJsCanvas';


const DesktopApp: FC = () => {
  const navigate = useNavigate();
  const [show3D, setShow3D] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  
  useEffect(() => {
    tl.fromTo(".reveal-effect", {y: 200,}, {y: 0,
      ease: "power4.out",
      delay: .2,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  const handle3DVersion = () => {
    setShow3D(true)
    tl.fromTo(".reveal-effect", {y: 0,}, {y: 200,
      ease: "power4.in",
      delay: .2,
      stagger: {
        amount: 0.4,
      },
    });
    setTimeout(() => {
      if (menuRef.current)
        menuRef.current.style.zIndex = '0';
    }, 1500);
  }

  const on3DVersionEnter = () => {
    tl.fromTo(".reveal-effect-3d-version", {y: 200,}, {y: 0,
      ease: "power4.out",
      delay: 0,
      stagger: {
        amount: 0.4,
      },
    });
  }

  const on3DVersionLeave = () => {
    tl.fromTo(".reveal-effect-3d-version", {y: 0,}, {y: 200,
      ease: "ease-out",
      delay: 0,
      stagger: {
        amount: 0.4,
      },
    });
  }

  return (
    <div className="canvas-container">
        <article className="welcome-container" ref={menuRef}>
          <section>
            <div className="reveal-effect-container">
              <h1 className="title welcome-title reveal-effect">Welcome to</h1>
            </div>
            <div className="reveal-effect-container ">
              <h1 className="title welcome-title reveal-effect">my portfolio!</h1>
            </div>
            <div className="subtitle-container reveal-effect-container">
              <img className="line-img reveal-effect" src="/img/line.png" alt="line" />
              <h2 className="subtitle reveal-effect">Choose an option.</h2>
            </div>
          </section>

          <section className='btns-section'>

            <div className="hover-msg-container reveal-effect-container">
              <div className="reveal-effect-3d-version">
                <p>The performance of this version will be affected by both your network connection and your hardware.</p>
              </div>

            </div>

            <div className="version-btns reveal-effect-container">
              <button className="threejs-version-btn reveal-effect" onClick={handle3DVersion} onMouseEnter={on3DVersionEnter} onMouseLeave={on3DVersionLeave}>
                <span className="text">3D Version</span>
              </button>
              <button className="OS-version-btn reveal-effect" onClick={() => navigate('/OS')}>
                OS Version
              </button>
            </div>
          </section>

        </article>

      {show3D && <ThreeJsCanvas />}
    </div>
  );
};

export default DesktopApp;
function MutableRefObject() {
  throw new Error('Function not implemented.');
}

