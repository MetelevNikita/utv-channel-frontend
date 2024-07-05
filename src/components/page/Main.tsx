import { FC } from 'react'

//

import { Col, Container } from 'react-bootstrap'

// components

  import ProgramBlock from './ProgramBlock'
  import News from './News'
  import Projects from './Projects'
  import About from './About'


interface MainProps {
  modalOpen: any

}


const Main: FC<MainProps> = ({ modalOpen }) => {



  return (


    <Container>


          <Col>

          <ProgramBlock />
          <News modalOpen={modalOpen}/>
          <Projects />
          <About />

          </Col>


    </Container>



  )
}

export default Main
