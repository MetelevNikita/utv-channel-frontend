// css

import '../../../styles/animation.css'

import { FC } from 'react'

//

import {Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// img

import vk from '../../../asset/logo-social/vk.svg'
import tg from '../../../asset/logo-social/tg.svg'
import wa from '../../../asset/logo-social/wa.svg'
import yt from '../../../asset/logo-social/yt.svg'
import ok from '../../../asset/logo-social/ok.svg'


const Footer = () => {



  const logoArr = [
    {
      img: vk,
      link: 'https://vk.com/utvrussia'
    },

    {
      img: tg,
      link: 'https://t.me/s/utvufa'
    },

    {
      img: yt,
      link: 'https://www.youtube.com/channel/UCvCcbnj9Ls2RrxFfUZVGi_w'
    },

    {
      img: ok,
      link: 'https://ok.ru/utvrussia'
    }

  ]

  const menuOne = ['ООО «Фирма «БИС», 2009 — 2024 г. Любое использование материаловдопускается только с согласия редакции', 'Политика конфиденциальности', 'Пользовательское соглашение']

  const menuTwo = [
    {
      title: 'Новости',
      link: '/news'
    },

    {
      title: 'Телепрограмма',
      link: '/program'
    },

    {
      title: 'Проекты',
      link: '/project'
    },

    {
      title: 'Прямой эфир',
      link: '/live'
    },

    {
      title: 'О канале',
      link: '/about'
    },
  ]

  const menuThree = ['Республика Башкортостан, г. Уфа, просп. Октября, 4/2  этаж 2', 'пн-пт 09:00–18:00', '+7 (347) 246-54-54']

  const menuFour = [
    {
      title: 'ufanet.ru',
      link: 'https://ufanet.ru'
    },

    {
      title: 'pervoklassnik.info',
      link: 'https://pervoklassnik.info'
    },

    {
      title: 'springbell.ru',
      link: 'https://springbell.ru'
    },
  ]

  return (



          <Row className='mt-5'>

          <Row md={12} sm={12} xs={12} style={{width: '100%', height: '100%', background: 'linear-gradient(94deg, rgba(242,173,16,0.9020044543429844) 0%, rgba(255,218,0,1) 0%, rgba(232,24,12,1) 100%)'}}>

            <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column'>

                <Col md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center mt-2'>

                    <Col style={{fontSize: '35px', fontWeight: '600', color: 'white'}}>Давайте дружить!</Col>
                    <Col style={{fontSize: '25px', fontWeight: '300', color: 'white'}} className='d-flex justify-content-center align-items-center text text-center'>подписывайтесь на наши соцсети</Col>
                </Col>

                  <Col md={6} sm={12} xs={12} style={{height: '145px'}} className='d-flex justify-content-center align-items-center'>

                      {logoArr.map((logo: any, index: number) => <Link key={index + 1} target='_blank' className='footer_icon_animation' to={logo.link}><img key={index} src={logo.img} alt={logo.title} style={{marginRight: '10px'}} /></Link>)}

                  </Col>


            </Col>

          </Row>


          <Row md={12} sm={12} xs={12} style={{width: '100%', height: '100%', backgroundColor: 'black'}}>

            <Col md={12} sm={12} xs={12} className='d-flex justify-content-around flex-md-row flex-column'>

              <Col md={3} sm={12} xs={12} className='mt-4 '>
                  {(menuOne.length < 1) ? <></> : menuOne.map((menu: string, index: number) => <Col key={index} className='mb-2' style={{color: 'white', fontSize: '14px', lineHeight: '136%'}}>{menu}</Col>)}
              </Col>


              <Col md={1} sm={12} xs={12} className='mt-4'>
                  {(menuTwo.length < 1)? <></> : menuTwo.map((menu: any, index: number) => <Col key={index} className='mb-2' ><Link style={{color: 'white', fontSize: '14px', lineHeight: '136%'}} to={menu.link}>{menu.title}</Link></Col>)}
              </Col>


              <Col md={2} sm={12} xs={12} className='mt-4'>
                {(menuThree.length < 1)? <></> : menuThree.map((menu: string, index: number) => <Col key={index} className='mb-2' style={{color: 'white', fontSize: '14px', lineHeight: '136%'}}>{menu}</Col>)}
              </Col>


              <Col md={1} sm={12} xs={12} className='mt-4'>
                  {(menuFour.length < 1)? <></> : menuFour.map((menu: any, index) => <Col key={index} className='mb-2' ><a style={{color: 'white', fontSize: '14px', lineHeight: '136%'}} href={menu.link}>{menu.title}</a></Col>)}
              </Col>

            </Col>
          </Row>


          </Row>

  )
}

export default Footer
