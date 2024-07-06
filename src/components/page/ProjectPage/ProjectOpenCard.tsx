import { FC } from'react'
import { useParams } from 'react-router-dom'

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import MyButton from '../../UI/MyButton'


// server

import projectServer from '../../../server/projectServer'

//

const ProjectOpenCard = () => {

  const {id} = useParams()


  const currentProjectCard = projectServer.filter((card) => {return card.id == Number(id)})[0]
  console.log(currentProjectCard)




  if (!currentProjectCard) {
    return <Col style={{fontSize: '20px', textAlign: 'center'}}>Loading...</Col>
  }





  return (

    <Container>

    <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column justify-content-around mt-4'>


      <Col lg={5} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>

          <Col lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-4'><img style={{width: '100%'}} src={currentProjectCard.img} alt="title-image" /></Col>

          <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center'>

              <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-3'><MyButton style={{width: '90%', height: '44px'}} className='project_button_animation' text={'Трейлер'} onClick={() => {console.log('трейлер')}}/></Col>
              <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-3'><MyButton style={{width: '90%', height: '44px'}} className='project_button_animation' text={'Канал'} onClick={() => {console.log('канал')}}/></Col>

          </Col>

      </Col>


      <Col lg={5} md={5} sm={12} xs={12} className='d-flex flex-column'>




          <Col style={{fontSize: '35px', fontWeight: '800', color: 'black', height: 'max-content'}} lg={6} md={6} sm={12} xs={12}>{currentProjectCard.title}</Col>
          <Col style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content', minHeight: '140px', maxHeight: 'max-content'}} lg={6} md={6} sm={12} xs={12}>{currentProjectCard.description}</Col>


        <Col lg={6} md={6} sm={6} xs={6} className='d-flex'>

            <Col style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content'}} lg={6} md={6} sm={6} xs={6}>{currentProjectCard.duration}</Col>
            <Col style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content'}} lg={6} md={6} sm={6} xs={6}>{currentProjectCard.year}</Col>

        </Col>

        <Col lg={6} md={6} sm={6} xs={6} style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content'}}>{currentProjectCard.author}</Col>


      </Col>

    </Col>
    </Container>
  )
}

export default ProjectOpenCard