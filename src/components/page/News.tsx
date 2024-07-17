import { FC, useEffect } from'react'

//

import { Col, Row } from 'react-bootstrap'


// components

import MyButtonLink from '../UI/MyButtonLink'
import NewsMainBlock from './NewsMainBlock'

// img

import TGLinkImg from '../../asset/buttons-img/telegram.svg'
import WALinkImg from '../../asset/buttons-img/whatsapp.svg'


// server

import newsCard from './../../server/newsCard'

// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHooks'
import { getAsyncNews } from '../../store/newsSlice'




type buttonArrType  = {
  img: string
  title: string
  onClick: () => void

}

interface NewsProps {

  modalOpen: any
}



const News: FC<NewsProps> = ({ modalOpen }) => {

  useEffect(() => {dispatch(getAsyncNews())}, [])

  const dispatch = useAppDispatch()
  const newsSelector = useAppSelector(state => state.news.news)



  const { modalNewsOpen, setModalNewsOpen } = modalOpen

  const currentDate = new Date().toISOString().split('T')[0]

  console.log(currentDate)
  console.log(newsSelector)

  const todayNews = newsSelector.filter((news, index)  => news.date == currentDate).filter((news, index) => index < 3)
  console.log(todayNews)
  const popularNews = newsSelector.map((card) => card).sort((a, b) => b.views - a.views).filter((news, index) => index < 3)



  const buttonArr = [
    {
      img: TGLinkImg,
      title: 'Подписывайтесь на наши новости в Telegram',
      onClick: () => {window.location.href = 'https://web.telegram.org/k/#@utvufa'}
    },

    {
      img: WALinkImg,
      title: 'Присылайте нам интересные новости',
      onClick: () => {setModalNewsOpen(true)}

    },
  ]





  return (



    <Row md={12} sm={12} xs={12} className='mt-5 mb-5'>

      <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column justify-content-around  mb-5'>

        <Col md={6} sm={12} xs={12} className='d-flex justify-content-center'>
          <NewsMainBlock newsArr={todayNews} newsTitle={`Новости ${currentDate}`} linkButton={'/news'} newsButton='Смотреть все'/>
        </Col>

        <Col md={6} sm={12} xs={12} className='d-flex justify-content-center justify-content-center'>

          <NewsMainBlock newsTitle={'Популярные'} linkButton={'/news'} newsButton='Смотреть все' newsArr={popularNews}/>

        </Col >

      </Col>




        <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column justify-content-around mt-4'>

            {buttonArr.map((button, index) => {
              return <Col style={{width: '48%'}} key={index} md={6} sm={12} xs={12} onClick={button.onClick} className='mb-4 d-flex justify-content-between'><MyButtonLink style={{height: '116px', textDecoration: 'none', fontSize: '19px', color: 'black', border: '1px solid #FEA633'}} linkTitle={button.title} linkImg={button.img}/></Col>
            })}


        </Col>

    </Row>

  )
}

export default News
