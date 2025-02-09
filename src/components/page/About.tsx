import { FC, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'

//

import { Row, Col, Container } from 'react-bootstrap'

// img

import img from './../../asset/about/aboutIMG.svg'

// components

import MyButton from '../UI/MyButton'
import MyInput from '../UI/MyInput'
import MyTextArea from '../UI/MyTextArea'
import MyCheckBox from '../UI/MyCheckBox'
import ContactsIcon from '../UI/ContactsIcon'


// img

import phone from '../../asset/about/aboutPhone.svg'
import mail from '../../asset/about/aboutMail.svg'
import adress from '../../asset/about/aboutAdress.svg'


//

interface AboutProps {
  modalAgree: any
  modalDisAgree: any
}

const About: FC<AboutProps> = ({ modalAgree, modalDisAgree }) => {

  const [message, setMessage] = useState({
    name: '',
    phone: '',
    question: ''
  })

  const {modalSubmitAgree, setModalSubmitAgree} = modalAgree
  const {modalSubmitDisagree, setModalSubmitDisagree} = modalDisAgree
  const [chk, setChk] = useState(false)


  const sendTgSiteMessage = async () => {

    const messageTg = `Сообщение с сайта UTV.ru!\n\n Отправитель: ${message.name}\n\n Телефон: ${message.phone}\n\n Вопрос: ${message.question}`

    try {

      const TOKEN = process.env.REACT_APP_TG_SITE_TOKEN
      const TG_ID = process.env.REACT_APP_TG_ID





      const responce = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({chat_id: TG_ID, text: messageTg})
      })

      if(responce.ok) {
        const data = responce.json()
        return data
      }

      console.log('ОШИБКА ЗАПРОСА НА СЕРВЕР')



    } catch (error) {
      console.log(`Сообщение с сайта на отправлено ${error}`)
    }
  }



  const sendEmailSiteMessage = async () => {
    try {

      const serviceId: any = 'service_viwod49'
      const templateId: any = 'template_m9aovxn'
      const publickKey: any = 'aTzCo9OYt8pgUgw-L'


      const params = {
        from_name: message.name,
        message: message.question,
        reply_to: "utv.news@yandex.ru"
      }


      emailjs.send(serviceId, templateId, params, publickKey)
        .then((responce) => {
          return responce
        }).catch((error) => {
          console.log(error)
        })



    } catch (error) {
      console.log(error)
    }
  }


  const submitMessageHandler = () => {

    if(message.name === '' || message.phone === '' || message.question === '') {
      setModalSubmitDisagree(true)
      return
    }

    if(!chk) {
      setModalSubmitDisagree(true)
      return
    }


    sendEmailSiteMessage()
    sendTgSiteMessage()

    setMessage({
      name: '',
      phone: '',
      question: ''
    })


    setModalSubmitAgree(true)


  }



  const infoArr = [

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
    info: 'ул.пр-т.Октября, 4/2'
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

        <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Контакты</Col>

      </Col>


      <Col md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column justify-content-around align-items-center mt-5'>


        {(infoArr.length < 1) ? <></> : infoArr.map((item, index) => {
          return <Col key={index+1} md={2} sm={12} xs={12} className='mb-5' ><ContactsIcon img={item.img} title={item.title} info={item.info}/></Col>
        })}


      </Col>


      <Col md={12} sm={12} xs={12} className='mt-5'>

        <div style={{width: '100%', height: '1px', backgroundColor: '#FEA633', borderRadius: '10px'}}></div>

      </Col>




      <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column justify-content-between mt-5'>



        <Col md={5} sm={12} xs={12} style={{marginRight: '10px', marginLeft: '10px'}}>

          <div className='mb-3'>
            <div style={{fontSize: '18px', fontWeight: '700'}} className='mb-2'>Имя</div>
            <MyInput style={{border: '1px solid #c8c8c8', width: '100%', height: '53px', paddingLeft: '10px', borderRadius: '8px'}} type={'text'} placeholder={'имя'} value={message.name} onChange={(e) => {setMessage({...message, name: e.target.value})}}></MyInput>
          </div>

          <div className='mb-3'>
            <div style={{fontSize: '18px', fontWeight: '700'}} className='mb-2'>Телефон</div>
            <MyInput style={{border: '1px solid #c8c8c8', width: '100%', height: '53px', paddingLeft: '10px', borderRadius: '8px'}} type={'text'} placeholder={'телефон'} value={message.phone} onChange={(e) => {setMessage({...message, phone: e.target.value})}}></MyInput>
          </div>

        </Col>


        <Col md={7} sm={12} xs={12} className=''  style={{marginRight: '10px', marginLeft: '10px'}}>

          <div className='mb-3'>
            <div style={{fontSize: '18px', fontWeight: '700'}} className='mb-2'>Вопрос</div>
            <MyTextArea style={{border: '1px solid #c8c8c8', width: '100%', height: '89px', paddingLeft: '10px', borderRadius: '8px', paddingTop: '7px'}} value={message.question} onChange={(e) => {setMessage({...message, question: e.target.value})}} cols={6} rows={8} placeholder='ваш вопрос'></MyTextArea>
          </div>



          <Col md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column mt-3'>

            <Col md={7} sm={12} xs={12} className='mb-3'><MyCheckBox text={'я даю свое согласие на обработку моих персональных данных'} checked={chk} onChange={() => {setChk(prev => !prev)}} href='https://utvchannel.tw1.su/agreet/agreet.pdf'/></Col>
            <Col md={5} sm={12} xs={12} className='d-flex justify-content-md-end justify-content-center mb-3' ><MyButton style={{width: '264px', height: '48px', color: 'white', backgroundColor: '#FEA633', borderRadius: '10px'}} text={'Отправить'} onClick={() => {submitMessageHandler()}}/></Col>

          </Col>


        </Col>



      </Col>


      </Row>


  )
}

export default About
