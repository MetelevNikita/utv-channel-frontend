// css

import '../../../styles/animation.css'

//

import { FC, useEffect } from'react'
import { useParams, Link } from 'react-router-dom'

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import MyButton from '../../UI/MyButton'

// redux

import { useAppDispatch, useAppSelector } from '../../../types/reduxHooks'
import { getAsyncProject } from '../../../store/projectSlice'

// types

import { projectTypeCard } from '../../../types/types'

const ProjectOpenCard = () => {

  useEffect(() => {dispatch(getAsyncProject())}, [])

  const {id} = useParams()
  const dispatch =  useAppDispatch()
  const projectSelector: projectTypeCard[] = useAppSelector(state => state.project.project)


  const currentProjectCard = projectSelector.filter((card: projectTypeCard) => {return card.id == Number(id)})[0]
  console.log(currentProjectCard)




  if (!currentProjectCard) {
    return <Col style={{fontSize: '20px', textAlign: 'center'}}>Loading...</Col>
  }





  return (

    <Container>

    <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column justify-content-around mt-4 mb-3'>


      <Col lg={5} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>

          <Col lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-4' style={{width: '540px', height: '300px', overflow: 'hidden'}}><img className='project_card_animation' style={{width: '100%'}} src={currentProjectCard.image} alt="title-image" /></Col>

          <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center'>

              <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-3'><MyButton style={{width: '90%', height: '44px'}} className='project_button_animation' text={'Трейлер'} onClick={() => {console.log('трейлер')}}/></Col>
              <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-3'><Link target='_blank' style={{width: '90%', height: '44px', display: 'flex', justifyContent: 'center'}} className='project_button_animation' to={currentProjectCard.channel}><MyButton text={'Канал'} onClick={() => {console.log('канал')}}/></Link></Col>

          </Col>

      </Col>


      <Col lg={5} md={5} sm={12} xs={12} className='d-flex flex-column mb-3'>


          <Col style={{fontSize: '35px', fontWeight: '800', color: 'black', height: 'max-content', width: '100%'}} lg={6} md={6} sm={12} xs={12} className='mb-4'>{currentProjectCard.title}</Col>
          <Col style={{fontSize: '14px', fontWeight: '300', color: '#878787', height: 'max-content', minHeight: '140px', maxHeight: 'max-content', width: '100%'}} lg={6} md={6} sm={12} xs={12}>{currentProjectCard.description}</Col>


        <Col lg={6} md={6} sm={6} xs={6} className='d-flex mb-3' style={{width: '100%'}}>

            <Col style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content'}} lg={6} md={6} sm={6} xs={6}>{`Хронометраж: ${currentProjectCard.duration} минут`}</Col>
            <Col style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content'}} lg={6} md={6} sm={6} xs={6}>{`Год выпуска: ${currentProjectCard.year}`}</Col>

        </Col>

        <Col lg={6} md={6} sm={6} xs={6} style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content', width: '100%'}}>{`Автор передачи: ${currentProjectCard.author}`}</Col>


      </Col>

    </Col>
    </Container>
  )
}

export default ProjectOpenCard