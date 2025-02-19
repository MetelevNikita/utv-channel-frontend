import { FC, useState } from 'react'

//

import { Container, Row, Col } from 'react-bootstrap'

//

import emailjs from '@emailjs/browser'

// components

import MyInput from '../UI/MyInput'
import MyTextArea from '../UI/MyTextArea'
import MyCheckBox from '../UI/MyCheckBox'
import MyButton from '../UI/MyButton'

//

interface AskQuestion {
  modalAgree: any
  modalDisAgree: any
}

//


const AskQuestion: FC<AskQuestion> = ({ modalAgree, modalDisAgree }) => {

  const [chk, setChk] = useState(false)
  const [message, setMessage] = useState({
    name: '',
    phone: '',
    question: ''
  })


  const {modalSubmitAgree, setModalSubmitAgree} = modalAgree
  const {modalSubmitDisagree, setModalSubmitDisagree} = modalDisAgree


  // fn

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




  return (

    <Container>

      <Row>
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
                <Col md={5} sm={12} xs={12} className='d-flex justify-content-md-end justify-content-center mb-3' ><MyButton style={{width: '264px', height: '48px', color: 'white', backgroundColor: '#FA8129', borderRadius: '10px'}} text={'Отправить'} onClick={() => {submitMessageHandler()}}/></Col>

              </Col>


            </Col>

        </Col>
      </Row>


    </Container>



  )
}

export default AskQuestion
