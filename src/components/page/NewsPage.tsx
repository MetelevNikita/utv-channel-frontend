// css

import 'react-calendar/dist/Calendar.css';

// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHooks';
import { getAsyncNews } from '../../store/newsSlice';

// test server

import newsCard from '../../server/newsCard';

import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import NewsPreviewCard from './NewsPage/NewsPreviewCard'

//

import Calendar from 'react-calendar';


// type


type ValuePiesce = Date | null
type Value = ValuePiesce | [ValuePiesce, ValuePiesce]





const NewsPage = () => {

  useEffect(() => {dispatch(getAsyncNews())}, [])

  const dispatch = useAppDispatch()
  const newsSelector = useAppSelector(state => state.news.news)

  console.log(newsSelector)


  const [date, setDate] = useState<Value | any>(new Date())
  const currentDate = date.toLocaleDateString()
  console.log(currentDate)

  const dateFilterCard = newsSelector.filter((item) => {

    return new Date(item.date).toLocaleDateString()  ===  currentDate
  })



  console.log(dateFilterCard)


  const topList = dateFilterCard.filter((item, index) => {
    return index < 2
  })

  const bottomLst = dateFilterCard.filter((item, index) => {
    return index >= 2
  })


  const popularList = newsCard.sort((a, b) => {
    return a.views - b.views
  }).filter((item, index) => {
    return index < 3
  })





  return (

    <>


    <Container>

    <Col lg={12} md={12} className='mt-4'>

      <Col style={{fontSize: '25px', fontWeight: '600', lineHeight: '123%'}} className='mb-5'>Все новости</Col>


      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column'>


            <Col lg={8} md={8} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column mb-4'>
                {(dateFilterCard.length < 1) ? <Col lg={12} md={12} xs={12} sm={12}>список пуст</Col> : topList.map((item) => {
                        return <Col lg={6} md={6} sm={12} xs={12} className='d-flex'><Link to={`/news/${item.id}`} key={item.id}><NewsPreviewCard img={item.image_1} title={item.title} date={item.date} author={item.author} colorTitle='#000000' colorDate='#8F8F8F' sizeBlock={{width: '384px', height: '100%', flex: 'flex-column', sizeTitle: '16px', sizeInfo: '15px'}}/></Link></Col>})
                }
            </Col>


            <Col lg={4} md={4} sm={12} xs={12} className='d-flex justify-content-center'>
              <Calendar showWeekNumbers onChange={setDate} value={date} />
            </Col>

      </Col>


      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-row flex-wrap justify-content-between mt-4'>

          {(dateFilterCard.length < 1) ? <Col lg={12} md={12} xs={12} sm={12}></Col> : bottomLst.map((item) => {
                  return <Col lg={4} md={4} sm={12} xs={12} className='d-flex'><Link to={`/news/${item.id}`} key={item.id}><NewsPreviewCard img={item.image_1} title={item.title} date={item.date} author={item.author} colorTitle='#000000' colorDate='#8F8F8F' sizeBlock={{width: '384px', height: '100%', flex: 'flex-column', sizeTitle: '16px', sizeInfo: '15px'}}/></Link></Col>})
          }

      </Col>

    </Col>

    </Container>



    <Row md={12} sm={12} xs={12} style={{width: '100%', height: '100%', minHeight: '400px', backgroundColor: '#FFA52F', padding: '0px'}} className='mt-5 justify-content-center align-items-center'>


            <Col lg={9} md={9} sm={9} xs={9} className='d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center'>

              {(popularList.length < 1) ? <Col>Нет популярных карточек</Col> : popularList.map((item, index)  =>  {
                  return <Col lg={3} md={3} sm={12} xs={12} className='d-flex justify-content-center'><Link to={`/news/${item.id}`} key={item.id}><NewsPreviewCard img={item.imgTitle} title={item.lead.slice(0,100) + '...'} date={item.date} author={item.author} colorTitle='#ffffff' colorDate='#ffffff' sizeBlock={{width: '384px', height: '100%', flex: 'flex-column', sizeTitle: '12px', sizeInfo: '15px'}}/></Link></Col>
              })}

            </Col>


    </Row>




    </>




  )
}

export default NewsPage
