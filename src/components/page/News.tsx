import { FC } from'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyButtonLink from '../UI/MyButtonLink'
import NewsBlock from './NewsBlock'
import NewsAllBlock from './NewsAllBlock'

// img

import TGLinkImg from '../../asset/buttons-img/telegram.svg'
import WALinkImg from '../../asset/buttons-img/whatsapp.svg'


// server

import newsCard from './../../server/newsCard'

const News = () => {

  const buttonArr = [
    {
      link: 'https:',
      img: TGLinkImg,
      title: 'Подписывайтесь на наши новости в Telegram'
    },

    {
      link: 'https:',
      img: WALinkImg,
      title: 'Присылайте нам интересные новости'
    },
  ]



  return (


    <Row md={12} sm={12} xs={12} className='mt-5 mb-5'>

      <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column justify-content-around  mb-5'>

        <Col md={4} sm={12} xs={12} className='d-flex justify-content-md-start justify-content-center'>
            <NewsBlock />
        </Col>

        <Col md={4} sm={12} xs={12} className='d-flex justify-content-center'>
          <NewsAllBlock newsTitle={'Новости 12.03.24'} linkButton={'/'} newsButton='Смотреть все' cards={newsCard}/>
        </Col>

        <Col md={4} sm={12} xs={12} className='d-flex justify-content-md-end justify-content-center'>

          <NewsAllBlock newsTitle={'Популярные'} linkButton={'/'} newsButton='Смотреть все' cards={newsCard}/>

        </Col >

      </Col>


        <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column justify-content-around mt-4'>

            {buttonArr.map((button, index) => {
              return <Col key={index} md={6} sm={12} xs={12} className='mb-4 d-flex justify-content-around'><MyButtonLink style={{width: '95%', height: '116px', textDecoration: 'none', color: 'black', fontSize: '19px', border: '1px solid #FEA633'}} linkTitle={button.title} linkHref={button.link} linkImg={button.img}/></Col>
            })}



        </Col>

    </Row>

  )
}

export default News
