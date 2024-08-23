import React, { useRef, useState } from 'react'
import ImageLoader from '../ImageLoader';
import 'pages/MobileApp/Sections/Projects/Ride/Ride.css';


const Ride = () =>  {
  const r = useRef(null);
  const [wasOpen, setWasOpen] = useState(false);

  return (
    <article ref={r} className={`project-container project-type-2 box-shadow`} onClick={() => {
      r.current.classList.toggle("project-selected");
      setWasOpen(!wasOpen);
    }}>
      <div className='grid-item-container'>
        <ImageLoader src='img/Projects/ride.png' containerClassName='ride-image-container image-container' imageClassName='ride-image' />

        <div className='project-description-container'>
          <div className='project-images-slider-container'>
            <ImageLoader src='img/Mobile/Ride/PreRequestRideSS.png' containerClassName='project-ride-image-slider' imageClassName='ride-image-slider' />
          </div>

          <section className='project-description-section' id='project-ride-description-section'>
            <h3 className='project-title' onClick={() => wasOpen ? open('https://play.google.com/store/apps/details?id=com.imiguez.ride&pcampaignid=web_share', '_blank') : null}>Ride 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
              </svg>
            </h3>

            <p className='project-description-title'>Introduction:</p>
            <p>The project idea started from a request from my taxist uncle dealing with the unefficient manner taxis work. The app is not currently available for production use --due to legal matters-- but it is completly functional.</p>

            <p className='project-description-title'>About the app:</p>
            <p>The main function of the app is to handle ride requests in real-time taking advantage of WebSockets, and shearing real-time location using a background task that update the location every 100 metters traveled.</p>

            <p className='project-description-title'>Backend:</p>
            <p>For the backend I dockerized a <strong>Nest.js</strong> server, which is in charge to make the authentication and authorization controls. The server is connected to a <strong>Postgres</strong> database, and is managed by <strong>TypeOrm</strong>.</p>
            <p>For the security I made a combination between <strong>JWT</strong> and <strong>Sessions</strong>, since I don't like JWT very much because of the lack of control in case a JWT have been stolen. But, in the other hand, cookies are not fully supported by React Native. Thus, I combined JWT with Sessions stored in a <strong>Redis</strong> instance.</p>

            <p className='project-description-title'>Frontend:</p>
            <p>The front was made using <strong>React Native</strong> and the global state was handled by <strong>Redux</strong>. I had to use many Google APIs, like "Directions" and "Places", to enhance the user experience.</p>

            <p className='project-description-title'>Infrastructure:</p>
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