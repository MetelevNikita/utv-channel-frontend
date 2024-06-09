import { FC, useState } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyButton from  '../UI/MyButton'
import TeamCard from '../UI/TeamCard'
import NumberButton from '../UI/NumberButton'

// img

import banner from './../../asset/team/teamBanner.png'

// server

import { personServer } from '../../server/teamServer'


const Channel = () => {


  const [pageNumber, setPageNumber]  =  useState(1)


  const newArrFirst = personServer.filter((item) => {

    return item.id <= 12
  })

  const newArrSecond = personServer.filter((item)  =>  {
    return item.id > 12 && item.id <=24
  })




  const pageSelection = () => {

    if(pageNumber === 1)  {
      return newArrFirst.map((card, index) => {
        return <Col style={{width: '100%'}} className='d-flex justify-content-center'><TeamCard key={index} img={card.img} name={card.name} profession={card.profession}/></Col>
      })
    } else if (pageNumber ===  2) {
      return newArrSecond.map((card, index) => {
        return <Col style={{width: '100%'}} className='d-flex justify-content-center'><TeamCard key={index} img={card.img} name={card.name} profession={card.profession}/></Col>
      })
    }

  }



const pageList = [
  {
    number: 1,
    link: '/'
  },

  {
    number: 2,
    link: '/'
  },


]



  return (

    <Row>

      <Col md={12} sm={12} xs={12} style={{width: '100%'}} className='d-flex flex-column mt-4'>

        <Col md={12} sm={12} xs={12}><img src={banner} alt="banner" style={{width: '100%'}}/></Col>
        <Col md={12} sm={12} xs={12} style={{width: '100%', height: 'max-content', fontSize: '16px'}} className='mt-4'>Региональный информационно-развлекательный HD-канал, осуществляющий вещание в кабельной сети "Уфанет" в Уфе, Октябрьском, Стерлитамаке, Салавате, Ишимбае, Мелеузе, Нефтекамске, Казани, Нижнем Новгороде, Оренбурге и Орске. Первый региональный канал, начавший вещание в цифровом HD-формате. Региональный информационно-развлекательный HD-канал, осуществляющий вещание в кабельной сети "Уфанет" в Уфе, Октябрьском, Стерлитамаке, Салавате, Ишимбае, Мелеузе, Нефтекамске, Казани, Нижнем Новгороде, Оренбурге и Орске. Первый региональный канал, начавший вещание в цифровом HD-формате.Региональный информационно-развлекательный HD-канал, осуществляющий вещание в кабельной сети "Уфанет" в Уфе, Октябрьском, Стерлитамаке, Салавате, Ишимбае, Мелеузе, Нефтекамске, Казани, Нижнем Новгороде, Оренбурге и Орске. Первый региональный канал, начавший вещание в цифровом HD-формате.</Col>

      </Col>




      <Col md={12} sm={12} xs={12}>


          <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='mb-3 mt-3'>Лица канала</Col>

          <Col md={12} sm={12} xs={12} style={{display: 'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', justifyContent: 'center', alignItems: 'center'}}>

            {pageSelection()}

          </Col>



      </Col>


      <Col md={12} className='d-flex justify-content-center mt-4'>

      {pageList.map((item) => {
        return <NumberButton num={item.number} page={{pageNumber, setPageNumber}}/>
      })}

      </Col>



    </Row>


  )
}

export default Channel