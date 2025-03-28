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

// utill

import { getWeekArray } from '../util/currentWeekNews';


// type


type ValuePiesce = Date | null
type Value = ValuePiesce | [ValuePiesce, ValuePiesce]




const NewsPage: FC = () => {

  useEffect(() => {dispatch(getAsyncNews())}, [])

  const dispatch = useAppDispatch()
  const newsSelector = useAppSelector(state => state.news.news)



  const [date, setDate] = useState<Value | any>(new Date())
  const currentDate = new Date().toISOString().split('T')[0]

  const dateFilterCard = newsSelector.filter((item) => {
    return new Date(item.date).toLocaleDateString() === new Date(date).toLocaleDateString()
  })



  const topList = dateFilterCard.filter((item, index) => {
    return index < 2
  })

  const bottomLst = dateFilterCard.filter((item, index) => {
    return index >= 2
  })


  // popular


  const arrDateWeek = getWeekArray(currentDate)
  const weekPopular = newsSelector.filter((item) => arrDateWeek.includes(item.date)).sort((a, b) => b.views - a.views).filter((item, index) => index <=2)


  //


  return (

    <>


    <Container>

    <Col lg={12} md={12} className='mt-4'>



    <Col className='d-flex flex-md-row flex-column mb-3' style={{fontSize: '26px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FA8129'}}>Все новости</Col>
      <Col lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-lg-start justify-content-center  flex-lg-row flex-column'>


            <Col lg={{order: 1}} md={8} sm={12} xs={{order: 2}} className='d-flex flex-lg-row flex-md-row flex-column mb-4'>
                {(dateFilterCard.length < 1) ? <Col className='d-flex flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FA8129'}}>Список пуст</Col> : topList.map((item, index) => {
                        return <Col style={{width: '100%'}} key={index} className='d-flex justify-content-lg-start justify-content-center'><Link to={`/news/${item.id}`} key={item.id}><NewsPreviewCard video={item.video} img={(!item.title_image) ? item.image_1 : item.title_image} title={item.title} date={item.date} author={item.author} colorTitle='#000000' colorDate='#8F8F8F'/></Link></Col>})
                }
            </Col>


            <Col lg={{order: 2}} md={4} sm={12} xs={{order: 1}} className='d-flex justify-content-lg-center justify-content-end mb-4'>
              <Calendar showWeekNumbers onChange={setDate} value={date} className={'css_calendar'}/>
            </Col>

      </Col>


    </Col>

    </Container>


    <Row style={{minHeight: '400px', backgroundColor: '#e9ecef', padding: '0px'}} className='mt-5 justify-content-center align-items-center'>

        {(weekPopular.length < 1) ? <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='d-flex justify-content-center mt-3'>Нет популярных новостей на сегодня</Col> : weekPopular.map((item, index)  =>  {
            return <Col key={index+1} lg={3} md={3} sm={12} xs={12} style={{height: '270px'}} className='d-flex justify-content-center mt-3'><Link to={`/news/${item.id}`} key={item.id} style={{color: 'black'}}><NewsPreviewCard video={item.video} img={item.title_image} title={item.lead.slice(0,100) + '...'} date={item.date} author={item.author} colorTitle='black' colorDate='black'/></Link></Col>
        })}

    </Row>


    <Container>


    <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-row flex-wrap justify-content-start mt-4'>

        {(dateFilterCard.length < 1) ? <Col lg={12} md={12} xs={12} sm={12}></Col> : bottomLst.map((item, index) => {
                return <Col key={index} lg={4} md={4} sm={12} xs={12} className='d-flex justify-content-lg-start justify-content-center'><Link to={`/news/${item.id}`} key={item.id}><NewsPreviewCard video={item.video} img={(!item.title_image) ? item.image_1 : item.title_image} title={item.title} date={item.date} author={item.author} colorTitle='#000000' colorDate='#8F8F8F'/></Link></Col>})
        }

    </Col>


    </Container>




    </>




  )
}

export default NewsPage
