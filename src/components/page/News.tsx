import { FC } from'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyButtonLink from '../UI/MyButtonLink'

// img

import TGLinkImg from '../../asset/buttons-img/telegram.svg'
import WALinkImg from '../../asset/buttons-img/whatsapp.svg'

//

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


    <Row md={12} sm={12} xs={12}>

      <Col md={12} sm={12} xs={12}>

        <Col md={4} sm={12} xs={12}></Col>

        <Col md={4} sm={12} xs={12}></Col>

        <Col md={4} sm={12} xs={12}></Col>

      </Col>


        <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column justify-content-around mt-4'>

            {buttonArr.map((button) => {

              return <Col md={6} sm={12} xs={12} className='mb-4 d-flex justify-content-around'><MyButtonLink style={{width: '95%', height: '116px', textDecoration: 'none', color: 'black', fontSize: '19px', border: '1px solid #FEA633'}} linkTitle={button.title} linkHref={button.link} linkImg={button.img}/></Col>
            })}



        </Col>

    </Row>

  )
}

export default News
