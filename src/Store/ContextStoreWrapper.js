import React, { Component } from 'react'
import natours from '../Images/natours.png'
import weather from '../Images/weather.png'
import calculator from '../Images/calculator.png'
import clash from '../Images/clash.png'
import game from '../Images/game.png'
import lennon from '../Images/lennon.png'
import pomodoro from '../Images/pomodoro.png'

export const ContextStore = React.createContext()

export class ContextStoreWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'Natours',
          image: natours,
          techs: ['HTML', 'CSS', 'SASS'],
          dateWritten: 'Jun 2018',
          sourceLink: 'https://github.com/RickBr0wn/natours',
          demoLink: 'https://rickbr0wn.github.io/natours/',
          about:
            'This is a mock website written for an imaginary company. It is written soley in HTML and SASS. There are lots of unique and fun animations on display.'
        },
        {
          title: 'Local Weather Forecast',
          image: weather,
          techs: ['HTML', 'CSS', 'JAVASCRIPT'],
          dateWritten: 'Jun 2018',
          sourceLink: 'https://github.com/RickBr0wn/natours',
          demoLink: 'https://rickbr0wn.github.io/natours/',
          about:
            'A Weather App created as part of my Free Code Camp Front End Certificate'
        },
        {
          title: 'Natours',
          image: calculator,
          techs: ['HTML', 'CSS', 'SASS'],
          dateWritten: 'Jun 2018',
          sourceLink: 'https://github.com/RickBr0wn/natours',
          demoLink: 'https://rickbr0wn.github.io/natours/',
          about:
            'This is a mock website written for an imaginary company. It is written soley in HTML and SASS. There are lots of unique and fun animations on display.'
        },
        {
          title: 'Natours',
          image: clash,
          techs: ['HTML', 'CSS', 'SASS'],
          dateWritten: 'Jun 2018',
          sourceLink: 'https://github.com/RickBr0wn/natours',
          demoLink: 'https://rickbr0wn.github.io/natours/',
          about:
            'This is a mock website written for an imaginary company. It is written soley in HTML and SASS. There are lots of unique and fun animations on display.'
        },
        {
          title: 'Natours',
          image: game,
          techs: ['HTML', 'CSS', 'SASS'],
          dateWritten: 'Jun 2018',
          sourceLink: 'https://github.com/RickBr0wn/natours',
          demoLink: 'https://rickbr0wn.github.io/natours/',
          about:
            'This is a mock website written for an imaginary company. It is written soley in HTML and SASS. There are lots of unique and fun animations on display.'
        },
        {
          title: 'Natours',
          image: lennon,
          techs: ['HTML', 'CSS', 'SASS'],
          dateWritten: 'Jun 2018',
          sourceLink: 'https://github.com/RickBr0wn/natours',
          demoLink: 'https://rickbr0wn.github.io/natours/',
          about:
            'This is a mock website written for an imaginary company. It is written soley in HTML and SASS. There are lots of unique and fun animations on display.'
        },
        {
          title: 'Natours',
          image: pomodoro,
          techs: ['HTML', 'CSS', 'SASS'],
          dateWritten: 'Jun 2018',
          sourceLink: 'https://github.com/RickBr0wn/natours',
          demoLink: 'https://rickbr0wn.github.io/natours/',
          about:
            'This is a mock website written for an imaginary company. It is written soley in HTML and SASS. There are lots of unique and fun animations on display.'
        }
      ]
    }
  }

  render() {
    return (
      <ContextStore.Provider
        value={{
          projects: this.state.projects
        }}>
        {this.props.children}
      </ContextStore.Provider>
    )
  }
}

export default ContextStoreWrapper
