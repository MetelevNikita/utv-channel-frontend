import { FC, useEffect } from'react'

//

import { Col, Row } from 'react-bootstrap'


// components

import MyButtonLinkWA from '../UI/MyButtonLinkWA'
import MyButtonLinkTG from '../UI/MyButtonLinkTG'
import NewsMainBlock from './NewsMainBlock'

// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHooks'
import { getAsyncNews } from '../../store/newsSlice'


// utill

import { getWeekArray } from '../util/currentWeekNews'



interface NewsProps {
  modalOpen: any
}



const News: FC<NewsProps> = ({ modalOpen }) => {

  const dispatch = useAppDispatch()
  useEffect(() => {dispatch(getAsyncNews())}, [dispatch])

  const newsSelector = useAppSelector(state => state.news.news)


  const { setModalNewsOpen } = modalOpen
  const currentDate = new Date().toISOString().split('T')[0]
  const cDate = new Date()
  const previousDate = new Date(cDate.setDate(cDate.getDate() - 1)).toISOString().split('T')[0]


  const todayNews = newsSelector.filter((news, index)  => news.date == currentDate).filter((news, index) => index < 3)
  const previousDateNews = newsSelector.filter((news, index)  => news.date == previousDate).filter((news, index) => index < 3)

  // pupular news week

  const arrDateWeek = getWeekArray(currentDate)
  const weekPopular = newsSelector.filter((item) => arrDateWeek.includes(item.date)).sort((a, b) => b.views - a.views).filter((item, index) => index <=2)


  //




  return (


    <Row md={12} sm={12} xs={12} className='mt-5 mb-5'>

      <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column justify-content-around  mb-5'>

        <Col md={6} sm={12} xs={12} className='d-flex justify-content-center'>


        {(todayNews.length < 1) ? <NewsMainBlock newsArr={previousDateNews} newsTitle={`Новости ${previousDate}`} linkButton={'/news'} newsButton='Смотреть все'/> : <NewsMainBlock newsArr={todayNews} newsTitle={`Новости ${currentDate}`} linkButton={'/news'} newsButton='Смотреть все'/>}

        </Col>

        <Col md={6} sm={12} xs={12} className='d-flex justify-content-center justify-content-center'>

          <NewsMainBlock newsTitle={'Популярные'} linkButton={'/news'} newsButton='Смотреть все' newsArr={weekPopular}/>

        </Col >

      </Col>




        <Col md={12} sm={12} xs={12} className='d-flex flex-column flex-md-row flex-column justify-content-around mt-4'>


            <Col style={{cursor: 'pointer'}} md={5} sm={12} xs={12} onClick={() => {setModalNewsOpen(true)}} className='mb-4 d-flex justify-content-center align-items-center'><MyButtonLinkWA linkTitle={'Присылайте нам интересные новости'} /></Col>

            <Col style={{cursor: 'pointer'}} md={5} sm={12} xs={12} onClick={() => {window.location.href = 'https://web.telegram.org/k/#@utvufa'}} className='mb-4 d-flex justify-content-center align-items-center'><MyButtonLinkTG linkTitle={'Подписывайтесь на наши новости в Telegram'} /></Col>


        </Col>

    </Row>

  )
}

export default News
