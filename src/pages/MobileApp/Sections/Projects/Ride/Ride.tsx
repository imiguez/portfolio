import React, { useRef } from 'react'
import ImageLoader from '../ImageLoader';
import 'pages/MobileApp/Sections/Projects/Ride/Ride.css';


const Ride = () =>  {
  const r = useRef(null);

  return (
    <article ref={r} className={`project-container project-type-2 box-shadow`} id='project-ride' onClick={() => r.current.classList.toggle("project-selected")}>
      <div className='grid-item-container'>
        <ImageLoader src='img/Projects/ride.png' containerClassName='ride-image-container image-container' imageClassName='ride-image' />

        <div className='grid-item-container ride-container'>
          <div className='project-images-slider-container'>
            <ImageLoader src='img/Mobile/Ride/PreRequestRideSS.png' containerClassName='project-ride-image-slider' imageClassName='ride-image-slider' />
          </div>

          <section className='project-ride-description-section'>
            <h3 className='project-ride-title'>Ride</h3>

            <p className='project-ride-description-title'>Introduction:</p>
            <p>The project idea started from a request from my taxist uncle dealing with the unefficient manner taxis work. The app is not currently available for production use --due to legal matters-- but it is completly functional.</p>

            <p className='project-ride-description-title'>About the app:</p>
            <p>The main function of the app is to handle ride requests in real-time taking advantage of WebSockets, and shearing real-time location using a background task that update the location every 100 metters traveled.</p>

            <p className='project-ride-description-title'>Backend:</p>
            <p>For the backend I dockerized a <strong>Nest.js</strong> server, which is in charge to make the authentication and authorization controls. The server is connected to a <strong>Postgres</strong> database, and is managed by <strong>TypeOrm</strong>.</p>
            <p>For the security I made a combination between <strong>JWT</strong> and <strong>Sessions</strong>, since I don't like JWT very much because of the lack of control in case a JWT have been stolen. But, in the other hand, cookies are not fully supported by React Native. Thus, I combined JWT with Sessions stored in a <strong>Redis</strong> instance.</p>

            <p className='project-ride-description-title'>Frontend:</p>
            <p>The front was made using <strong>React Native</strong> and the global state was handled by <strong>Redux</strong>. I had to use many Google APIs, like "Directions" and "Places", to enhance the user experience.</p>

            <p className='project-ride-description-title'>Infrastructure:</p>
            <p>The app is continuous integrated by <strong>Expo</strong> submit and update pipelines.</p>
            <p>The backend is hosted in an <strong>AWS</strong> EC2 instance connected to an ECS where is stored the database.</p>
            <p>An owned domain is attached to the instance, allowing me to take advantage of <strong>One Signal</strong> to send <strong>OTP</strong> emails using my domain for email verifications. I also use the One Signal <strong>Push Notifications</strong> to notify the users about their ride state.</p>
          </section>
        </div>
      </div>
    </article>
  )
}

export default Ride