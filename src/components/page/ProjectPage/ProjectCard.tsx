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



        <Col style={{width: '286px', height: '241px'}}>

        <Col style={{width: '286px', height: '162px', overflow: 'hidden',display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '100%'}}  src={img} alt="project-img" /></Col>
        <Col style={{height: 'max-content', maxWidth: '286px', color: 'black', fontWeight: '800'}} className='mt-2'>{title}</Col>
        <Col style={{height: 'max-content', maxWidth: '286px', color: 'black', fontSize: '13px'}} className='mt-2'>{description}</Col>

        </Col>




  )
}

export default ProjectCard
