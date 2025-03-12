import { FC } from 'react'
import { Link } from 'react-router-dom'

//

import { Row, Col } from 'react-bootstrap'

// img

import img from './../../asset/about/aboutIMG.svg'

// components

import MyButton from '../UI/MyButton'
import ContactsIcon from '../UI/ContactsIcon'
import AskQuestion from '../UI/AskQuestion'

// img

import phone from '../../asset/about/aboutPhone.svg'
import mail from '../../asset/about/aboutMail.svg'
import adress from '../../asset/about/aboutAdress.svg'


//

interface AboutProps {
  modalAgree: any
  modalDisAgree: any
}


interface infoArrProps {
  img: string,
  title: string,
  info: string
}

const About: FC<AboutProps> = ({ modalAgree, modalDisAgree }) => {


  const infoArr: infoArrProps[] = [

  {
    img: phone,
    title: 'Телефон',
    info: '+7 (347) 246-54-54'
  },

  {
    img: mail,
    title: 'Почта',
    info: 'utv.news@yandex.ru'
  },

  {
    img: adress,
    title: 'Адрес',
    info: 'пр-т.Октября, 4/2'
  }



]



  return (

    <Row>

      <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column mt-5 mb-5'>

        <Col md={4} sm={12} xs={12} className='d-flex justify-content-start'><img src={img} alt="about-img" /></Col>

        <Col md={8} sm={12} xs={12}>
          <Col className='d-flex justify-content-start mt-md-0 mt-4' style={{fontSize: '25px', fontWeight: '500'}}>О канале</Col>
          <Col className='d-flex justify-content-start mt-2' style={{fontSize: '16px', lineHeight: '136%'}}>Региональный информационно-развлекательный HD-канал, осуществляющий вещание в кабельной сети "Уфанет" в Уфе, Октябрьском, Стерлитамаке, Салавате, Ишимбае, Мелеузе, Нефтекамске, Казани, Нижнем Новгороде, Оренбурге и Орске. Первый региональный канал, начавший вещание в цифровом HD-формате</Col>

          <Col className='mt-3'><Link to={'https://utvchannel.tw1.su/presentation/%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D1%8B.pdf'} target={'_blank'}><MyButton className='animation_my_button' style={{width: '286px', height: '41px'}} onClick={() => {}} text='Скачать презентацию'></MyButton></Link></Col>
        </Col>

      </Col>


      <Col md={12} sm={12} xs={12}>

        <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Задайте вопрос</Col>

      </Col>




      <AskQuestion modalAgree={modalAgree} modalDisAgree={modalDisAgree}/>


      <Col md={12} sm={12} xs={12} className='mt-5 mb-5'>

        <div style={{width: '100%', height: '1px', backgroundColor: '#FEA633', borderRadius: '10px'}}></div>

      </Col>


      <Col md={12} sm={12} xs={12} className='d-none d-sm-block'>

        <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Контакты</Col>

        </Col>



        <Col className='d-none d-sm-block'>

          <Col md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column justify-content-around align-items-center mt-5'>
            {(infoArr.length < 1) ? <></> : infoArr.map((item: infoArrProps, index: number): React.ReactNode => {
              return <Col style={{cursor: 'pointer'}} key={index+1} md={2} sm={12} xs={12} className='mb-5' ><ContactsIcon img={item.img} title={item.title} info={item.info}/></Col>
            })}
          </Col>

        </Col>


      </Row>


  )
}

export default About
