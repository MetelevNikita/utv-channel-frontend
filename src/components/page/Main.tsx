import { FC } from 'react'

//

import { Col } from 'react-bootstrap'

// components

  import ProgramBlock from './ProgramBlock'
  import News from './News'
  import Projects from './Projects'
  import About from './About'



const Main: FC = () => {
  return (

    <Col>

      <ProgramBlock />
      <News />
      <Projects />
      <About />

    </Col>

  )
}

export default Main
