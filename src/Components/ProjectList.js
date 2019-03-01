import React from 'react'
import { ContextStore, ContextStoreWrapper } from '../Store/ContextStoreWrapper'
import { ProjectItem } from '../Components'

const ProjectList = () => {
  return (
    <ContextStoreWrapper>
      <ContextStore.Consumer>
        {({ projects }) => {
          return (
            <div className='project-list'>
              {projects &&
                projects.map((item, index) => (
                  <ProjectItem
                    title={item.title}
                    image={item.image}
                    key={index}
                    techs={item.techs}
                    dateWritten={item.dateWritten}
                  />
                ))}
            </div>
          )
        }}
      </ContextStore.Consumer>
    </ContextStoreWrapper>
  )
}

export default ProjectList
