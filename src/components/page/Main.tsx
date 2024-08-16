import { FC } from 'react'

//

import { Col, Container } from 'react-bootstrap'

// components

  import ProgramBlock from './ProgramBlock'
  import News from './News'
  import Projects from './Projects'
  import SheduleList from './Schedule/SheduleList'
  import About from './About'


  //

  import MyImageAnimation from '../UI/MyImageAnimation'


interface MainProps {
  modalOpen: any

}


const Main: FC<MainProps> = ({ modalOpen }) => {



  return (


    <Container>

          <ProgramBlock />
          <News modalOpen={modalOpen}/>
          <Projects />
          <SheduleList />
          <About />

    </Container>



  )
}

export default Main
