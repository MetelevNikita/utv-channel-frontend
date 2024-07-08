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

          <ProgramBlock />
          <News modalOpen={modalOpen}/>
          <Projects />
          <About />

    </Container>



  )
}

export default Main
