import 'pages/MobileApp/Sections/Experience/Experience.css';
import React from 'react'
import ExperienceArticle from './ExperienceArticle';

function Experience() {
  return (
    <section className='section' id='experience'>
        <h2 className='title'>Experience</h2>
        <article className='experience-main-container'>
            <div className='side-bar'/>
            <div className='experiences-container'>
                <ExperienceArticle title='QA Automation - Tsoft' dateFrom='Aug 2021' dateTo='Jan 2023' companyImgUrl='img/tsoft.png' description={[
                    "Automatized and performed test cases for web and SAP applications leveraging a Selenium based tool.",
                    "Designed SQL queries to get users that comply with specific requirements based on each case, fill inputs with valid data and perform process validations."
                ]}/>
                <ExperienceArticle title='Freelance Web Development - Flightq' dateFrom='Dec 2020' dateTo='Feb 2021' companyImgUrl='img/flightq.png' description={[
                    "Developed intuitive user interfaces for multiple components of the flight quotation system.",
                    "Implemented CRUD functionalities for flight quotations."
                ]}/>
            </div>
        </article>
    </section>
  )
}

export default Experience