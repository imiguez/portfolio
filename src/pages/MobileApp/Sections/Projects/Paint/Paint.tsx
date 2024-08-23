import React, { useRef } from 'react'
import ImageLoader from '../ImageLoader'
import 'pages/MobileApp/Sections/Projects/Paint/Paint.css';

const Paint = () =>  {
  const r = useRef(null);

  return (
    <article ref={r} className='project-container project-type-1 box-shadow' onClick={() => r.current.classList.toggle("project-selected")}>
      <div className='grid-item-container'>
        <ImageLoader src='img/Projects/paint.png' containerClassName='paint-image-container image-container' imageClassName='paint-image' backgroundGradient='radial-gradient(circle at right bottom, rgb(57 68 85), rgb(87 99 117))'/>
      </div>
    </article>
  )
}

export default Paint