import { FC, useEffect, useState } from 'react'

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import TeamCard from '../UI/TeamCard'
import NumberButton from '../UI/NumberButton'

// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHooks'
import { getAsyncTeams } from '../../store/teamSlice'





const Channel: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAsyncTeams())
  }, [dispatch])

  const teamSelector = useAppSelector((state) => state.team.teams).map((item) => item).sort((a: any, b: any) => a.id - b.id)


  const [pageNumber, setPageNumber]  =  useState(1)

  const newArrFirst = teamSelector.filter((item: any, index: number) => {
    return index <= 11
  })

  const newArrSecond = teamSelector.filter((item: any, index: number)  =>  {
    return item.id > 12 && item.id <=24
  })


  const newArrThird = teamSelector.filter((item: any, index: number)  =>  {
    return item.id > 24 && item.id <=48
  })








  const pageSelection = () => {

    if(pageNumber === 1)  {
      return newArrFirst.map((card, index) => {
        return <Col key={index} style={{width: '100%'}} className='d-flex justify-content-center'><TeamCard key={index} img={card.image} name={card.name} profession={card.profession}/></Col>
      })
    } else if (pageNumber ===  2) {
      return newArrSecond.map((card, index) => {
        return <Col key={index} style={{width: '100%'}} className='d-flex justify-content-center'><TeamCard key={index} img={card.image} name={card.name} profession={card.profession}/></Col>
      })
    } else if (pageNumber ===  3) {
      return newArrThird.map((card, index) => {
        return <Col key={index} style={{width: '100%'}} className='d-flex justify-content-center'><TeamCard key={index} img={card.image} name={card.name} profession={card.profession}/></Col>
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

  {
    number: 3,
    link: '/'
  },


]



  return (


    <Container>
    <Row>

      <Col md={12} sm={12} xs={12} style={{width: '100%', height: '100%'}} className='d-flex flex-column mt-4'>

        <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='mb-3 mt-3'>О нас</Col>

        <Col md={12} sm={12} xs={12} style={{width: '100%', height: 'max-content', fontSize: '16px'}} className='mt-4'>UTV - информационно-развлекательный канал, вещающий в кабельной сети "Уфанет" в Республике Башкортостан и Оренбургской области. Среди проектов - новости, специальные репортажи, трэвел-шоу, программы о здоровье и науке, а также вдохновляющие истории о людях. Слоган - “Все начинается с себя!”  Наш канал создан для тех неравнодушен к окружающему миру и готов менять его вместе с нами. Главная цель – развитие культуры людей, которые любят свое дело и созидают для себя и других.Часть контента создается при помощи наших зрителей. Есть новость или что нам рассказать? Пришлите ее через форму на сайте или Telegram.</Col>

      </Col>




      <Col md={12} sm={12} xs={12}>
          <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='mb-3 mt-3'>Лица канала</Col>

          <Col md={12} sm={12} xs={12} className='d-flex flex-wrap' style={{width: '100%'}}>

            {pageSelection()}

          </Col>
      </Col>


      <Col md={12} className='d-flex justify-content-center mt-4'>
        {pageList.map((item) => {
          return <NumberButton num={item.number} page={{pageNumber, setPageNumber}}/>
        })}
      </Col>

    </Row>
    </Container>


  )
}

export default Channel