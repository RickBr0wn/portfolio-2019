import React, { Component } from 'react'
import {
  Navbar,
  Header,
  ProjectItem,
  Masonry,
  MasonryLayout
} from './Components'
import { ContextStoreWrapper, ContextStore } from './Store/ContextStoreWrapper'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <ContextStoreWrapper>
          <ContextStore.Consumer>
            {({ projects }) => {
              console.log(typeof projects)
              return (
                <MasonryLayout gap={20}>
                  {projects &&
                    projects.map((item, index) => (
                      <ProjectItem
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
                </MasonryLayout>
              )
            }}
          </ContextStore.Consumer>
        </ContextStoreWrapper>
      </div>
    )
  }
}

export default App
