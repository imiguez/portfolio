import React, { useRef } from 'react'
import ImageLoader from '../ImageLoader'
import 'pages/MobileApp/Sections/Projects/Beerbee/Beerbee.css';

function Beerbee() {
  const r = useRef(null);

  return (
    <article ref={r} className='project-container project-type-2 box-shadow' onClick={() => r.current.classList.toggle("project-selected")}>
      <div className='grid-item-container'>
        <ImageLoader src='img/Projects/beerbee.png' containerClassName='beerbee-image-container image-container' imageClassName='beerbee-image' backgroundGradient='linear-gradient(rgba(80,80,80,1), rgba(20, 20, 20, 1))'/>
      </div>
    </article>
  )
}

export default Beerbee