import { FC } from 'react'

//

import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// img

import logo from '../../asset/logo_utv/Logotype_UTV.svg'
import tg from '../../asset/contanct/tg.svg'
import yt from '../../asset/contanct/yt.svg'
import vk from '../../asset/contanct/vk.svg'



const Contacts = () => {




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



  ]




  return (

    <Container>


      <Row className='d-flex justify-content-center mt-5'>

        <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>

          <Col style={{width: '100%'}} className='d-flex justify-content-center mb-4'><img style={{width: '500px'}} src={logo} alt="logo_utv" /></Col>
          <Col style={{fontSize: '36px', width: '100%', textAlign: 'center'}}>Все начинается с себя</Col>

        </Col>


        <Col lg={5} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center'>

          <Col className='mb-4'>
            <Col style={{fontSize: '24px', fontWeight: '600'}}>Телефон редакции</Col>
            <Col style={{fontSize: '14px', fontWeight: '400'}}>8-800-000-00-00</Col>
          </Col>

          <Col className='mb-4'>
            <Col style={{fontSize: '24px', fontWeight: '600'}}>По вопросам рекламы</Col>
            <Col style={{fontSize: '14px', fontWeight: '400'}}>8-800-000-00-00</Col>
          </Col>


          <Col className='mb-2' style={{fontSize: '16px', fontWeight: '400'}}>Подпишись</Col>

          <Col className='d-flex'>

            {logoArr.map((item) => {
              return <Link to={item.link} style={{marginRight: '10px', marginLeft: '10px'}}><Col><img src={item.img} alt="icon-img" /></Col></Link>
            })}

          </Col>


        </Col>


      </Row>



      <Row className='mt-5'>
        <Col lg={12} md={12} sm={12} xs={12}></Col>
      </Row>



    </Container>

  )
}

export default Contacts
