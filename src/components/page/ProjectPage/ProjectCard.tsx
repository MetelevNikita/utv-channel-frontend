import { CSSProperties, FC } from 'react'

//

import { Row, Col, Container } from 'react-bootstrap'


// components

import MyImageAnimation from '../../UI/MyImageAnimation'

//

interface ProjectCardProps {
  title: string
  description: string
  img: string
  style?: CSSProperties
}






const ProjectCard: FC<ProjectCardProps> = ({ title, description, img, style }) => {


  const descriptionShort = description.slice(0, 100) + '...'


  return (



        <Col style={{width: '286px', height: '241px'}}>

        <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><MyImageAnimation image={img} width={'286px'} height={'160px'} scaleStart={1.3} scaleEnd={1}/></Col>
        <Col style={{height: 'max-content', maxWidth: '286px', color: 'black', fontWeight: '800'}} className='mt-2'>{title}</Col>
        <Col style={{height: 'max-content', maxWidth: '286px', color: 'black', fontSize: '13px'}} className='mt-2'>{descriptionShort}</Col>

        </Col>




  )
}

export default ProjectCard
