import React, { FC } from 'react'

interface IExperienceArticle {
    title: string,
    dateFrom: string,
    dateTo: string,
    companyImgUrl: string,
    description: string[];
}

const ExperienceArticle: FC<IExperienceArticle> = ({ title, dateFrom, dateTo, companyImgUrl, description }) => {

  return (
    <article className='experience-container box-shadow'>
        <header>
            <div>
                <h3 className='experience-title'>{title}</h3>
                <p className='experience-date'>{dateFrom} <span style={{color: '#dbdbdbd9'}}>•</span> {dateTo}</p>
            </div>
                <img src={companyImgUrl} loading='lazy' className='company-banner box-shadow'/>
        </header>
        <div className='experience-header-bar box-shadow'/>
        {description.map((d, i) => (
            <p className='experience-description' key={i}>{d}</p>

        ))}
    </article>
  )
}

export default ExperienceArticle