import { FC } from 'react'

//

import { Col } from 'react-bootstrap'

// components

  import News from './News'
  import Projects from './Projects'
  import About from './About'



const Main: FC = () => {
  return (

    <Col>

      <News />
      <Projects />
      <About />

    </Col>

  )
}

export default Main
