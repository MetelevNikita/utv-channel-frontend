// css

import 'react-calendar/dist/Calendar.css';

// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHooks';
import { getAsyncNews } from '../../store/newsSlice';

//

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




  const [date, setDate] = useState<Value | any>(new Date())
  const currentDate = date.toLocaleDateString()
  const dateFilterCard = newsSelector.filter((item) => {
    return new Date(item.date).toLocaleDateString()  ===  currentDate
  })



  const topList = dateFilterCard.filter((item, index) => {
    return index < 2
  })

  const bottomLst = dateFilterCard.filter((item, index) => {
    return index >= 2
  })



  const popularList = newsSelector.map((card) => card).sort((a, b) => b.views - a.views).filter((item, index) => index < 3)





  return (

    <>


    <Container>

    <Col lg={12} md={12} className='mt-4'>



    <Col className='d-flex flex-md-row flex-column mb-3' style={{fontSize: '26px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Все новости</Col>
      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column'>


            <Col lg={8} md={8} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column mb-4'>
                {(dateFilterCard.length < 1) ? <Col className='d-flex flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Список пуст</Col> : topList.map((item, index) => {
                        return <Col key={index} lg={6} md={6} sm={12} xs={12} className='d-flex'><Link to={`/news/${item.id}`} key={item.id}><NewsPreviewCard video={item.video} img={item.image_1} title={item.title} date={item.date} author={item.author} colorTitle='#000000' colorDate='#8F8F8F' sizeBlock={{flex: 'flex-column', sizeTitle: '16px', sizeInfo: '12px'}}/></Link></Col>})
                }
            </Col>


            <Col lg={4} md={4} sm={12} xs={12} className='d-flex justify-content-center'>
              <Calendar showWeekNumbers onChange={setDate} value={date} className={'css_calendar'}/>
            </Col>

      </Col>


    </Col>

    </Container>


    <Row md={10} sm={10} xs={12} style={{minHeight: '400px', backgroundColor: '#e9ecef', padding: '0px'}} className='mt-5 justify-content-center align-items-center'>

        {(popularList.length < 1) ? <Col>Нет популярных карточек</Col> : popularList.map((item, index)  =>  {
            return <Col lg={3} md={3} sm={12} xs={12} className='d-flex justify-content-center mt-3'><Link to={`/news/${item.id}`} key={item.id} style={{color: 'black'}}><NewsPreviewCard video={item.video} img={item.image_1} title={item.lead.slice(0,100) + '...'} date={item.date} author={item.author} colorTitle='black' colorDate='black' sizeBlock={{flex: 'flex-column', sizeTitle: '16px', sizeInfo: '12px'}}/></Link></Col>
        })}

    </Row>


    <Container>


    <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-row flex-wrap justify-content-between mt-4'>

        {(dateFilterCard.length < 1) ? <Col lg={12} md={12} xs={12} sm={12}></Col> : bottomLst.map((item, index) => {
                return <Col key={index} lg={4} md={4} sm={12} xs={12} className='d-flex'><Link to={`/news/${item.id}`} key={item.id}><NewsPreviewCard video={item.video} img={item.image_1} title={item.title} date={item.date} author={item.author} colorTitle='#000000' colorDate='#8F8F8F' sizeBlock={{flex: 'flex-column', sizeTitle: '16px', sizeInfo: '12px'}}/></Link></Col>})
        }

    </Col>


    </Container>




    </>




  )
}

export default NewsPage
