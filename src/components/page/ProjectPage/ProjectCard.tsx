import { CSSProperties, FC } from 'react'

//

import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//

interface ProjectCardProps {
  title: string
  description: string
  img: string
  style?: CSSProperties
}



const ProjectCard: FC<ProjectCardProps> = ({ title, description, img, style }) => {
  return (

    <Container>


        <Col style={{width: '286px', height: '241px'}}>

        <Col><img src={img} alt="project-img" /></Col>
        <Col style={{height: 'max-content', maxWidth: '287px', color: 'black', fontWeight: '800'}} className='mt-2'>{title}</Col>
        <Col style={{height: 'max-content', maxWidth: '287px', color: 'black'}} className='mt-2'>{description}</Col>

        </Col>


    </Container>

  )
}

export default ProjectCard
