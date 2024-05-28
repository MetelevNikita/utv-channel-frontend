import { FC } from 'react'
import styled from 'styled-components'

//

import { Row, Col } from 'react-bootstrap'

// img

import img from './../../asset/about/aboutIMG.svg'

// components

import MyButton from '../UI/MyButton'

const About: FC = () => {


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



  return (

      <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column mt-5 mb-5'>

        <Col md={4} sm={12} xs={12} className='d-flex justify-content-start'><img src={img} alt="about-img" /></Col>

        <Col md={8} sm={12} xs={12}>
          <Col className='d-flex justify-content-start mt-md-0 mt-4' style={{fontSize: '25px', fontWeight: '500'}}>О канале</Col>
          <Col className='d-flex justify-content-start mt-2' style={{fontSize: '16px', lineHeight: '136%'}}>Региональный информационно-развлекательный HD-канал, осуществляющий вещание в кабельной сети "Уфанет" в Уфе, Октябрьском, Стерлитамаке, Салавате, Ишимбае, Мелеузе, Нефтекамске, Казани, Нижнем Новгороде, Оренбурге и Орске. Первый региональный канал, начавший вещание в цифровом HD-формате</Col>

          <Col className='mt-3'><NewButton><MyButton style={{width: '286px', height: '41px', border: '1px solid black', borderRadius: '67px'}} onClick={() => {console.log('click')}} text='Скачать презентацию'></MyButton></NewButton></Col>
        </Col>




      </Col>


  )
}

export default About
