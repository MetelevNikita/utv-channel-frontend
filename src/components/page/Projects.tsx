import { FC, useState } from 'react'
import styled from 'styled-components'

//

import { Row, Col } from 'react-bootstrap'

// components

import MyButton from '../UI/MyButton'
import ProjectList from './ProjectList'

//




const Projects = () => {



  const [selectCategory, setSelectCategory] = useState('program')
  const [isActive, setIsActive] = useState(false)
  const NewButton = styled.button`

  &: hover {
    background: #FEA633;
    border: 0px solid black;
    border-radius: 67px;
    color: white;
  }

    &:active {
      transition: all 0.03s ease-in-out;
      transform: scale(1.1);
    }
  `


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

    <Row>
        <Col md={12} sm={12} xs={12}>

            <Row md={12} sm={12} xs={12} style={{width: '100%'}}>

              <Col className= 'd-flex justify-content-center flex-md-row flex-column'>

              {categoryArr.map((item: any, index: number) => {
                return <Col key={index} md={2} sm={12} xs={12} className= 'd-flex justify-content-center'><MyButton style={(selectCategory === item.value) ? styleActive : styleDisable} text={item.title} onClick={() => {clickMenu(item.value)}}></MyButton></Col>
              })}

              </Col>

            </Row>



            <Row>

              {(selectCategory === 'program') ? <></> : <></>}
              {(selectCategory === 'project') ? <Col><ProjectList></ProjectList></Col> : <></>}



            </Row>



            <Row md={12} sm={12} xs={12} style={{width: '100%'}} className= 'd-flex justify-content-start mt-4'>
                <Col md={12} sm={12} xs={12} className='d-flex justify-content-center'><NewButton><MyButton style={{width: '388px', height: '45px', border: '1px solid black', borderRadius: '67px'}} text={'Все проекты'} onClick={() => {console.log('click')}}></MyButton></NewButton></Col>
            </Row>



        </Col>
    </Row>

  )
}

export default Projects
