import { FC, useState } from 'react'


//

import { Row, Col, Container } from 'react-bootstrap'

// components

import MyButton from '../UI/MyButton'
import ProjectList from './ProjectPage/ProjectList'
import { Link } from 'react-router-dom'

//




const Projects = () => {



  const [selectCategory, setSelectCategory] = useState('program')
  const [isActive, setIsActive] = useState(false)




  const categoryArr = [
    {
      id: 1,
      title: 'Проекты',
      value: 'project'
    },

    {
      id: 2,
      title: 'Телепрограмма',
      value: 'program'
    }
  ]

  const styleActive = {

    fontSize: '21px',
    fontWeight: '600',
    textDecoration: 'underline',
    textDecorationColor: '#FEA633'

  }

  const styleDisable = {
    fontSize: '21px',
    fontWeight: '600',
  }



  const clickMenu = (item: string = 'project') => {
    setSelectCategory(item)



  }



  return (

    <Container>


<Row>
        <Col md={12} sm={12} xs={12}>

            <Row md={12} sm={12} xs={12} style={{width: '100%'}}>

              <Col className= 'd-flex justify-content-center flex-md-row flex-column'>

              {categoryArr.map((item: any, index: number) => {
                return <Col key={index} md={3} sm={12} xs={12} className= 'd-flex justify-content-center'><MyButton  style={(selectCategory === item.value) ? styleActive : styleDisable} text={item.title} onClick={() => {clickMenu(item.value)}}></MyButton></Col>
              })}

              </Col>

            </Row>



            <Row>

              {(selectCategory === 'program') ? <></> : <></>}
              {(selectCategory === 'project') ? <Col><ProjectList></ProjectList></Col> : <></>}



            </Row>



            <Row md={12} sm={12} xs={12} style={{width: '100%'}} className= 'd-flex justify-content-start mt-4'>
                <Col md={12} sm={12} xs={12} className='d-flex justify-content-center'><Link to={'/project'}><MyButton className='animation_my_button' style={{width: '388px', height: '45px'}} text={'Все проекты'} onClick={() => {console.log('click')}}></MyButton></Link></Col>
            </Row>



        </Col>
    </Row>


    </Container>



  )
}

export default Projects
