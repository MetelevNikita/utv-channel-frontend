// css

import '../../../styles/animation.css'

// 

import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


// img

import vk from '../../../asset/logo-social/vk.svg'
import tg from '../../../asset/logo-social/tg.svg'
import yt from '../../../asset/logo-social/yt.svg'
import ok from '../../../asset/logo-social/ok.svg'
import dzen from '../../../asset/logo-social/dzen.svg'
import rt from '../../../asset/logo-social/rutube.svg'


const Footer: FC = () => {



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
    },

    {
      img: dzen,
      link: 'https://dzen.ru/utv.ru'
    },

    {
      img: rt,
      link: 'https://rutube.ru/channel/24157674/'
    },




  ]

  const menuOne = ['ООО «Фирма «БИС», 2009 — 2025 г. Любое использование материаловдопускается только с согласия редакции']

  const menuTwo = [
    {
      title: 'Новости',
      link: '/news'
    },

    {
      title: 'Проекты',
      link: '/project'
    },

    {
      title: 'О канале',
      link: '/about'
    },

    {
      title: 'Контакты',
      link: '/contacts'
    },
  ]

  const menuThree = ['Республика Башкортостан, г. Уфа, просп. Октября, 4/2  этаж 2', 'пн-пт 09:00–18:00']



  return (


    <>


          <Row md={12} sm={12} xs={12} style={{padding: '15px', background: 'linear-gradient(94deg, rgba(242,173,16,0.9020044543429844) 0%, rgba(255,218,0,1) 0%, rgba(232,24,12,1) 100%)'}} className='d-flex justify-content-center align-items-center mt-5'>

            <Col lg={8} md={8} sm={12} xs={12} className='d-flex justify-content-around flex-md-row flex-column'>

                <Col md={5} sm={12} xs={12} className='d-flex flex-column mt-2 mb-2'>

                    <Col style={{fontSize: 'calc(1rem + 1vw)', fontWeight: '600', color: 'white', textAlign: 'center', flex: '0, 0'}} className='d-flex justify-content-center align-items-center text-center'>Давайте дружить!</Col>
                    <Col style={{fontSize: 'calc(0.6rem + 1vw)', fontWeight: '300', color: 'white'}} className='d-flex justify-content-center text text-center'>подписывайтесь на наши соцсети</Col>
                </Col>

                  <Col md={4} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-2'>

                      {logoArr.map((logo: any, index: number) => <Link key={index + 1} target='_blank' className='footer_icon_animation' style={{height: 'max'}} to={logo.link}><img key={index} src={logo.img} alt={logo.title} style={{marginRight: '10px', width: '50px'}} /></Link>)}

                  </Col>


            </Col>

          </Row>


          <Row md={12} sm={12} xs={12} style={{backgroundColor: 'black'}} className='d-flex justify-content-around flex-md-row flex-column'>

            <Col md={7} sm={8} xs={8} className='d-flex justify-content-between flex-md-row flex-column'>

              <Col md={3} sm={12} xs={12} className='mt-4 '>
                  {(menuOne.length < 1) ? <></> : menuOne.map((menu: string, index: number) => <Col key={index} className='mb-2' style={{color: 'white', fontSize: '14px', lineHeight: '136%'}}>{menu}</Col>)}


                  <Col className='mb-2' style={{color: 'white', fontSize: '14px', lineHeight: '136%'}}><a target='_blank' style={{color: 'white'}} href='https://utvchannel.tw1.su/agreet/agreet.pdf'>Согласие на обработку персональных данных и куки,</a></Col>
                  <Col className='mb-2' style={{color: 'white', fontSize: '14px', lineHeight: '136%'}}>Разработка сайта ООО «Фирма «БИС».</Col>
              </Col>


              <Col md={2} sm={12} xs={12} className='mt-4'>
                  {(menuTwo.length < 1)? <></> : menuTwo.map((menu: any, index: number) => <Col key={index} className='mb-2' ><Link style={{color: 'white', fontSize: '14px', lineHeight: '136%'}} to={menu.link}>{menu.title}</Link></Col>)}
              </Col>


              <Col md={3} sm={12} xs={12} className='mt-4'>
                {(menuThree.length < 1)? <></> : menuThree.map((menu: string, index: number) => <Col key={index} className='mb-2' style={{color: 'white', fontSize: '14px', lineHeight: '136%'}}>{menu}</Col>)}
              </Col>


            </Col>
          </Row>

    </>

  )
}

export default Footer
