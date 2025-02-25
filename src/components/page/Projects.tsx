import { FC } from 'react'

//

import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// components

import MyButton from '../UI/MyButton'
import ProjectList from './ProjectPage/ProjectList'


//

const Projects: FC = () => {


  return (

    <Container>
      <Row>
        <Col md={12} sm={12} xs={12}>

            <Row md={12} sm={12} xs={12} style={{width: '100%'}}>

              <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Проекты</Col>

            </Row>



            <Row className='mt-3'>

                <ProjectList></ProjectList>

            </Row>



            <Row lg={12} md={12} sm={6} xs={12}  className= 'd-flex justify-content-center mt-4'>
                <Col md={6} sm={12} xs={12}><Link className='d-flex justify-content-center' to={'/project'}><MyButton style={{height: '45px', width: '60%'}} className='animation_my_button' text={'Все проекты'} onClick={() => {}}></MyButton></Link></Col>
            </Row>



        </Col>
    </Row>


    </Container>



  )
}

export default Projects
