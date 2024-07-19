import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import ProjectCard from './ProjectCard'

// img

import projectBanner from '../../../asset/project-page/project-page-banner.png'

// redux

import { useAppDispatch, useAppSelector } from '../../../types/reduxHooks'
import { getAsyncProject } from '../../../store/projectSlice'

// types

import { projectTypeCard } from '../../../types/types'

const ProjectPage = () => {

  useEffect(() => {dispatch(getAsyncProject())}, [])

  const dispatch  =  useAppDispatch()
  const projectSelector: projectTypeCard[] = useAppSelector(state => state.project.project)

  console.log(projectSelector)

  return (

    <Container>

        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-column mb-5'>


        <Col lg={12} md={12} sm={12} xs={12} className='d-flex mt-4 mb-3'><img style={{width: '100%'}} src={projectBanner} alt="project-banner" /></Col>

        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-wrap'>

            {(!projectSelector) ? <Col style={{fontSize: '18px', fontWeight: '600', textAlign: 'center'}}>Loading...</Col> : (projectSelector.length < 1) ? <Col style={{textAlign: 'center'}}>Список пуст</Col> : projectSelector.map((card: any, index) => {
              return <Col key={index + 1} lg={3} md={3} sm={12} xs={12} className='mb-4 d-flex justify-content-center align-items-center'><Link to={`/project/${card.id}`}><ProjectCard title={card.title} description={card.description} img={card.image}/></Link></Col>
            })}

        </Col>



        </Col>

    </Container>

  )
}

export default ProjectPage