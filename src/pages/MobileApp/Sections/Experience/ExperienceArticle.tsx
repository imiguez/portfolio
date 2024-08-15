import React, { FC, useState } from 'react'

interface IExperienceArticle {
    title: string,
    dateFrom: string,
    dateTo: string,
    companyImgUrl: string,
    description: string[];
}

const ExperienceArticle: FC<IExperienceArticle> = ({ title, dateFrom, dateTo, companyImgUrl, description }) => {

  return (
    <article className='experience-container'>
        <header>
            <div>
                <h3 className='experience-title'>{title}</h3>
                <p className='experience-date'>{dateFrom} <span style={{color: '#dbdbdbd9'}}>•</span> {dateTo}</p>
            </div>
                <img src={companyImgUrl} loading='lazy' className='company-banner'/>
        </header>
        <div className='experience-header-bar'/>
        {description.map(d => (
            <p className='experience-description'>{d}</p>

        ))}
    </article>
  )
}

export default ExperienceArticle