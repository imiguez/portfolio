import React, { useRef, useState } from 'react'
import ImageLoader from '../ImageLoader'
import 'pages/MobileApp/Sections/Projects/Beerbee/Beerbee.css';

function Beerbee() {
  const r = useRef(null);
  const [wasOpen, setWasOpen] = useState(false);

  return (
    <article ref={r} className='project-container project-type-2 box-shadow' onClick={() => {
      r.current.classList.toggle("project-selected");
      setWasOpen(!wasOpen);
    }}>
      <div className='grid-item-container'>
        <ImageLoader src='img/Projects/beerbee.png' containerClassName='beerbee-image-container image-container' imageClassName='beerbee-image' backgroundGradient='linear-gradient(rgba(80,80,80,1), rgba(20, 20, 20, 1))'/>

        <div className='project-description-container'>
          <div id='project-beerbee-image-container'>
            <ImageLoader src='img/Mobile/Beerbee/background.jpg' containerClassName='project-beerbee-background-container-image' imageClassName='project-beerbee-background-image' 
            backgroundGradient='linear-gradient(to right bottom, rgba(33, 32, 32, 0.7), rgba(33, 32, 32, 0.8))'
            />
            <ImageLoader src='img/Mobile/Beerbee/beerbee-title.png' containerClassName='project-beerbee-title-container-image' imageClassName='project-beerbee-title-image' />
          </div>

          <section className='project-description-section' id='project-beerbee-description-section'>
            <h3 className='project-title' onClick={() => wasOpen ? open('https://beerbee.neocities.org/', '_blank') : null}>Beerbee 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
              </svg>
            </h3>

            <p className='project-description-title'>Introduction:</p>
            <p>Beerbee was the first University project I did with a classmate.</p>

            <p className='project-description-title'>About the app:</p>
            <p>The project aimed to create a single-page application (<strong>SPA</strong>) with a dynamic table that would connect to a university API (now inactive) and display its data.</p>

            <p className='project-description-title'>What I learned:</p>
            <p>This project marked my first introduction to asynchronous programming in <strong>JavaScript</strong>, where I learned to work with asynchronous functions, fetch data from endpoints, and understand the concept of AJAX.</p>
            <p>Also, learned the basics of <strong>HTML</strong> and <strong>CSS</strong>.</p>
          </section>
        </div>
      </div>
    </article>
  )
}

export default Beerbee