import React, { useEffect, useState } from 'react'
import 'pages/MobileApp/Sections/ContactMe/ContactMe.css';

export default function ContactMe() {
  const [wasLoaded, setWasLoaded] = useState(false);
  useEffect(() => {
    document.getElementById('linkedin-btn').onclick = () => {
      window.open('https://www.linkedin.com/in/ignacio-miguez/', 'blank');
    }
    document.getElementById('github-btn').onclick = () => {
      window.open('https://github.com/imiguez', 'blank');
    }
  }, [])

  return (
    <section id='contact-me' className='section'>
      <h1 className='title' >Get in touch</h1>


      <div className='container'>
        <div className='guy-watching-the-phone-loader' style={{backgroundImage: wasLoaded ? "none" : `url(img/Mobile/guy-watching-the-phone_opt.png)`,}}>
          <img src="img/Mobile/guy-watching-the-phone.png" className="guy-watching-the-phone" style={{opacity: +wasLoaded}} loading='lazy' onLoad={() => setWasLoaded(true)}/>
        </div>
        <ul className='contact-list'>
          <li id='linkedin-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="linkedin"><g><g><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg>
            LinkedIn</li>
          <li id='github-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="github"><path d="M27.106 0s-2.101 0-4.235 3.2c-1.056-1.057-4.267-1.067-5.331-1.067-1.068 0-4.277.01-5.334 1.067C10.072 0 7.976 0 7.976 0c-1.141 2.864-.248 4.807-.033 5.333C6.877 6.4 5.806 7.467 5.806 12.8s3.878 8.008 8.538 8.533c-.599.521-1.067 2.133-1.067 3.2-1.197.533-4.528 1.045-6.4-2.133 0 0-1.067-2.133-3.2-2.133 0 0-2.133-.201 0 1.067 0 0 1.067 1.067 2.133 3.2 0 0 1.629 4.456 7.467 3.2.012 1.735 0 4.267 0 4.267h8.528v-7.467c0-.844-.466-2.68-1.067-3.2 4.66-.525 8.533-3.2 8.533-8.533 0-5.333-1.067-6.4-2.133-7.467.217-.527 1.108-2.47-.032-5.334z"></path></svg>
            Github
            </li>
        </ul>
      </div>

    </section>
  )
}