import { CSSProperties, FC } from 'react'

//

import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//

interface ProjectCardProps {
  title: string
  description: string
  img: string
  link: string
  style?: CSSProperties
}



const ProjectCard: FC<ProjectCardProps> = ({ title, description, img, link, style }) => {
  return (

    <Link to={link} style={style}>

        <Col style={{width: '286px', height: '241px'}}>

            <Col><img src={img} alt="project-img" /></Col>
            <Col style={{height: 'max-content', maxWidth: '287px', color: 'black'}} className='mt-3'>{title}</Col>
            <Col style={{height: 'max-content', maxWidth: '287px', color: 'black'}} className='mt-3'>{description}</Col>

        </Col>

    </Link>

  )
}

export default ProjectCard
