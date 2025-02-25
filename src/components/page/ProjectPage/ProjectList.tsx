import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

//

import { Col } from 'react-bootstrap'

// components

import ProjectCard from './ProjectCard'

// redux

import { useAppDispatch, useAppSelector } from '../../../types/reduxHooks'
import { getAsyncProject } from '../../../store/projectSlice'

//

const ProjectList: FC = () => {


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

      {(projectSelector.length < 1) ? <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col> : renderForProjectPage.map((project: any) => {return <Col className='d-flex d-flex justify-content-center' lg={3} key={project.id}><Link to={`project/${project.id}`}><ProjectCard title={project.title} img={project.image} description={shortDescription(project)}/></Link></Col>})}

    </Col>

  )
}

export default ProjectList
