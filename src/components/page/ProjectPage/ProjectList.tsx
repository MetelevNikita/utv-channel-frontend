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



  const renderForProjectPage = projectSelector.filter((preoject: any, index: number) => {
    return index <= 3
  })


  const shortDescription =  (project: any)  =>  {
    return project.description.slice(0, 70) + '...'
  }



  return (

    <Col md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column mt-3 mb-5'>

      {(projectSelector.length < 1) ? <Col className='mt-4'>Loading...</Col> : renderForProjectPage.map((project: any) => {return <Col className='d-flex d-flex justify-content-center' lg={3} key={project.id}><Link to={`project/${project.id}`}><ProjectCard title={project.title} img={project.image} description={shortDescription(project)}/></Link></Col>})}

    </Col>

  )
}

export default ProjectList
