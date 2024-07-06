import { FC } from 'react'

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import ProjectCard from './ProjectCard'

// img

import projectBanner from '../../../asset/project-page/project-page-banner.png'

// server

import projectServer from '../../../server/projectServer'
import { Link } from 'react-router-dom'

//

const ProjectPage = () => {
  return (

    <Container>

        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-column'>


        <Col lg={12} md={12} sm={12} xs={12} className='d-flex mt-4 mb-5'><img style={{width: '100%'}} src={projectBanner} alt="project-banner" /></Col>

        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-wrap'>

            {(projectServer.length < 1) ? <Col style={{textAlign: 'center'}}>Список пуст</Col> : projectServer.map((card) => {
              return <Col lg={3} md={3} sm={12} xs={12} className='mb-4'><Link to={`/project/${card.id}`}><ProjectCard title={card.title} description={card.description} img={card.img}/></Link></Col>
            })}

        </Col>



        </Col>

    </Container>

  )
}

export default ProjectPage