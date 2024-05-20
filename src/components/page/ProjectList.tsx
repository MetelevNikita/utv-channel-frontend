import { FC, useState } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import ProjectCard from '../UI/ProjectCard'

//

import propjectServer from '../../server/projectServer'

//

const ProjectList = () => {


  const [offset, setOffset] = useState<number>(0)

  const sliderOffset = (offset: number) => {

    if(offset <= -2000) {
      return setOffset(0)
    } else {

      setTimeout(() => {
        setOffset(offset -= 300)
      }, 4000)



    }

  }

  sliderOffset(offset)


  return (

    <Col md={12} sm={12} xs={12} className='d-flex mt-3 mb-4' style={{ overflow: 'hidden', width: '100%'}}>
      <Col md={12} sm={12} xs={12} className='d-flex' style={{width: '100%', position:'relative', left: offset + 'px', transition: '1s all ease'}}>


      {(propjectServer.length < 1) ? <>Loading...</> : propjectServer.map((project) => {return <Col key={project.id} style={{margin: '20px'}}><ProjectCard title={project.title} img={project.img} link={project.img} description={project.description}/></Col>})}


      </Col>
    </Col>

  )
}

export default ProjectList
