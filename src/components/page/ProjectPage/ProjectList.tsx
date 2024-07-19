import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//

import { Col, Row } from 'react-bootstrap'

// components

import ProjectCard from './ProjectCard'

// redux
import { useAppDispatch, useAppSelector } from '../../../types/reduxHooks'
import { getAsyncProject } from '../../../store/projectSlice'

//

const ProjectList = () => {


  useEffect(() => {
    dispatch(getAsyncProject())
  }, [])

  const dispatch = useAppDispatch()
  const projectSelector  = useAppSelector((state) => state.project.project)



  const shortDescription =  (project: any)  =>  {
    return project.description.slice(0, 70) + '...'
  }



  const [offset, setOffset] = useState<number>(0)

  const sliderOffset = (offset: number) => {

    if(offset <= -2000) {
      return setOffset(0)
    } else {

      setTimeout(() => {
        setOffset(offset -= 330)
      }, 4000)



    }

  }

  // sliderOffset(offset)


  return (

    <Col md={12} sm={12} xs={12} className='d-flex mt-3 mb-4' style={{ overflow: 'hidden', width: '100%'}}>
      <Col md={12} sm={12} xs={12} className='d-flex' style={{width: '100%', position:'relative', left: offset + 'px', transition: '1s all ease'}}>


      {(projectSelector.length < 1) ? <Col>Loading...</Col> : projectSelector.map((project: any) => {return <Col lg={3} key={project.id} style={{margin: '20px'}}><Link to={`project/${project.id}`}><ProjectCard title={project.title} img={project.image} description={shortDescription(project)}/></Link></Col>})}


      </Col>
    </Col>

  )
}

export default ProjectList
