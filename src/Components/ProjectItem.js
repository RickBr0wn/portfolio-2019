import React from 'react'

const ProjectItem = ({
  title,
  image,
  index,
  dateWritten,
  techs,
  sourceLink,
  demoLink,
  about,
  classIncrement
}) => {
  return (
    <div key={index} className={classIncrement}>
      <img src={image} alt={title} />
      <div className='text-container'>
        <h2>{title}</h2>
        <div className='date-text'>{dateWritten}</div>
        <div className='about-text'>{about}</div>
        <div className='tech-text'>
          Technologies used: {techs && techs.map(item => <span> {item} </span>)}
        </div>
        <div>
          <button className='btn'>
            View Source <i className='fab fa-github' />
          </button>
          <button className='btn'>
            View Demo <i className='fas fa-desktop' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
