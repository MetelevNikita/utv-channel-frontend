import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyTags from '../../UI/MyTags'


const MoreNews = () => {


  const date = new Date().toISOString().split('T')[0]
  console.log(date)

  return (

    <Col md={12} sm={12} xs={12} style={{width: '100%', height: 'max-content', padding: '30px', border: '2px solid black', borderRadius: '5px'}}>

        <Col md={8} sm={12} xs={12} className='d-flex mb-3'>

          <Col md={3} style={{fontSize: '14px', color: '#3C3C3C'}}>{date}</Col>
          <Col md={5} style={{fontSize: '14px', color: '#3C3C3C'}}>Автор: Ивано Иван</Col>

        </Col>


        <Col style={{fontSize: '20px', fontWeight: '600', maxWidth: '565px'}} className='mb-3'>«От точечной застройки мы никогда не уйдем»: замминистра строительства</Col>

        <Col style={{fontSize: '16px', fontWeight: '400', maxWidth: '726px', height: 'max-content'}} className='mb-3'>Хоккей это спортивная игра, которая проводится на льду с использованием специального оборудования, включая коньки, клюшки и шайбу.</Col>


        <Col>

          <MyTags tag={'tag1'} />

        </Col>


    </Col>
  )
}

export default MoreNews