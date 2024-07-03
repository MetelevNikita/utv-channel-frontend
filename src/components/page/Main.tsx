import { FC } from 'react'

//

import { Col, Container } from 'react-bootstrap'

// components

  import ProgramBlock from './ProgramBlock'
  import News from './News'
  import Projects from './Projects'
  import About from './About'



const Main: FC = () => {
  return (


    <Container>


          <Col>

          <ProgramBlock />
          <News />
          <Projects />
          <About />

          </Col>


    </Container>



  )
}

export default Main
