import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import ProjectCard from './ProjectCard'


// redux

import { useAppDispatch, useAppSelector } from '../../../types/reduxHooks'
import { getAsyncProject } from '../../../store/projectSlice'

// types

import { projectTypeCard } from '../../../types/types'

const ProjectPage = () => {

  useEffect(() => {dispatch(getAsyncProject())}, [])

  const dispatch  =  useAppDispatch()
  const projectSelector: projectTypeCard[] = useAppSelector(state => state.project.project)


  return (

    <Container>

        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-column mb-5'>
        <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='mb-3 mt-3'>Проекты</Col>

        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-wrap justify-content-lg-start justify-content-center mt-3 mb-4'>
            {(!projectSelector) ? <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col> : projectSelector.map((card: any, index) => {
              return <Col key={index + 1} lg={3} md={3} sm={12} xs={12} className='d-flex justify-content-lg-between justify-content-center align-items-center'><Link to={`/project/${card.id}`}><ProjectCard title={card.title} description={card.description} img={card.image}/></Link></Col>
            })}
        </Col>



        </Col>

    </Container>

  )
}

export default ProjectPage