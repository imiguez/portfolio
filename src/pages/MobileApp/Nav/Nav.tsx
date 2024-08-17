import React, { useEffect } from 'react'
import 'pages/MobileApp/Nav/Nav.css';

export default function Nav() {

    const toggleNav = () => {
        document.querySelectorAll('.bar').forEach(b => {
            b.classList.toggle('animation');
        })
        document.getElementById('nav').classList.toggle('show');
    }
    
    useEffect(() => {
        document.getElementById('burger-menu').onclick = toggleNav;
        document.querySelectorAll('li').forEach(li => {
            li.onclick = toggleNav;
        });
    }, []);

  return (
    <>
        <button className='burger-menu box-shadow' id='burger-menu'>
            <div className='bar' id='bar1'/>
            <div className='bar' id='bar2'/>
            <div className='bar' id='bar3'/>
        </button>

        <nav id='nav' className='box-shadow' >
            <ul className='ul'>
                <li><a href='#home'><i className="bi bi-house-fill" />Home</a></li>
                <li><a href='#experience'><i className="bi bi-hammer"></i>Experience</a></li>
                <li><a href='#projects'><i className="bi bi-cone-striped"></i>Projects</a></li>
                {/* <li><a href='#AboutMe'><i className="bi bi-person-fill"></i>About Me</a></li>
                <li><a href='#Education'><i className="bi bi-briefcase-fill"></i>Education</a></li> */}
                <li><a href='#contact-me'><i className="bi bi-phone-fill"></i>Contact Me</a></li>
            </ul>
        </nav>
    </>
  )
}