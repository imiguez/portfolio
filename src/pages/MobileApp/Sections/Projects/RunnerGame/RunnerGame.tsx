import React, { useRef } from 'react'
import ImageLoader from '../ImageLoader'
import 'pages/MobileApp/Sections/Projects/RunnerGame/RunnerGame.css';


function RunnerGame() {
  const r = useRef(null);

  return (
    <article ref={r} className='project-container project-type-1 box-shadow' onClick={() => r.current.classList.toggle("project-selected")}>
      <ImageLoader src='img/Projects/runnerGameBackgroundRemoved.png' containerClassName='image-container' imageClassName='runner-image' backgroundGradient='linear-gradient(rgba(80,80,80,1), #80bbc6)'/>
    </article>
  )
}

export default RunnerGame