import React, { Component } from 'react'
import { Header, ProjectItem } from './Components'
import { ContextStoreWrapper, ContextStore } from './Store/ContextStoreWrapper'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContextStoreWrapper>
          <ContextStore.Consumer>
            {({ projects }) => {
              return (
                <div className='grid'>
                  {projects &&
                    projects.map((item, index) => (
                      <ProjectItem
                        classIncrement={`box-${index + 1} project-item`}
                        title={item.title}
                        image={item.image}
                        key={index}
                        techs={item.techs}
                        dateWritten={item.dateWritten}
                        sourceLink={item.sourceLink}
                        demoLink={item.demoLink}
                        about={item.about}
                      />
                    ))}
                </div>
              )
            }}
          </ContextStore.Consumer>
        </ContextStoreWrapper>
      </div>
    )
  }
}

export default App
