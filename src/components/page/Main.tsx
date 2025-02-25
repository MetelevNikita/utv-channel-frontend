import { FC } from 'react'

//

import { Container } from 'react-bootstrap'

// components

import ProgramBlock from './ProgramBlock'
import News from './News'
import Projects from './Projects'
import SheduleList from './Schedule/SheduleList'
import About from './About'





interface MainProps {
  modalOpen: any
  modalAgree: any
  modalDisAgree: any

}


const Main: FC<MainProps> = ({ modalOpen, modalAgree, modalDisAgree }) => {



  return (


    <Container>

          <ProgramBlock />
          <News modalOpen={modalOpen}/>
          <Projects />
          <SheduleList />
          <About modalAgree={modalAgree} modalDisAgree={modalDisAgree}/>

    </Container>



  )
}

export default Main
