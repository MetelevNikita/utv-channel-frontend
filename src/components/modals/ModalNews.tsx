// css

import '../../styles/animation.css'

import { FC, useState } from 'react'

//

import { Container, Col, Row } from 'react-bootstrap'


// img


import modalImg from '../../asset/modal-news/modal-news.icon.png'

// components

import MyInput from '../UI/MyInput'
import MyTextArea from '../UI/MyTextArea'
import MyButton from '../UI/MyButton'
import MyCheckBox from '../UI/MyCheckBox'

//


interface ModalNewsProps  {
  modalMessage: {modalNewsMessage: any, setModalNewsMessage: any}
  modalOpen: {modalNewsOpen: boolean, setModalNewsOpen: any}
  modalAgree: any
  modalDisAgree: any
}


const ModalNews: FC<ModalNewsProps>  = ({ modalMessage, modalOpen, modalAgree, modalDisAgree }) => {


  const {modalNewsMessage, setModalNewsMessage} = modalMessage
  const {modalNewsOpen, setModalNewsOpen} = modalOpen

  //

  const {modalSubmitDisagree, setModalSubmitDisagree} = modalDisAgree
  const {modalSubmitAgree, setModalSubmitAgree} = modalAgree

  //


  const [chk, setChk] = useState(false)


  console.log(chk)

  const closeModalNews = () => {

    setModalNewsMessage({
      name: '',
      phone: '',
      email: '',
      message: '',
    })

    setModalNewsOpen(false)

  }



  console.log(process.env.REACT_APP_TG_ID)


  const sendTgMessage = async () => {

    const message = `Новое сообщение\n\nАвтор: ${modalNewsMessage.name}\n\nТелефон: ${modalNewsMessage.phone}\n\nПочта: ${modalNewsMessage.email}\n\n\nСообщение\n\n${modalNewsMessage.message}`


    const TOKEN = process.env.REACT_APP_TG_SITE_TOKEN
    const TG_ID = process.env.REACT_APP_TG_ID

    try {


      if(modalNewsMessage.name === '' && modalNewsMessage.phone === '' && modalNewsMessage.email === '' && modalNewsMessage.message === '') {
        setModalNewsOpen(true)
        setModalSubmitDisagree(true)
        return
      }



      if(chk === false) {
        setModalNewsOpen(true)
        setModalSubmitDisagree(true)
        return
      }




      const responce = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },

        body: JSON.stringify({chat_id: TG_ID, text: message})
      })

      if (responce.ok) {
        setModalNewsOpen(false)
        setModalSubmitAgree(true)
      } else {
        setModalNewsOpen(true)
        setModalSubmitDisagree(true)
      }

    } catch (error) {
      console.error(`Ошибка отправки файла в телеграм ${error}`)
    }


  }





  return (

    <Col lg={12} md={12} sm={12} xs={12} style={{width: '100%', height: '100vh', backgroundColor: '#21252947', position: 'fixed', top: '0px'}}>

      <Col style={{width: '489px', height: '803px', backgroundColor: 'white', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '8px'}}>

      <Col md={12} sm={12} className='d-flex flex-column justify-content-center align-items-center mt-1'>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-end mb-2 mt-1'>

                  <Col lg={2} md={2} sm={2} style={{width: '25px', background: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'white', marginRight: '20px', marginTop: '10px', cursor: 'pointer'}} onClick={() => {closeModalNews()}}>X</Col>

            </Col>


            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3 mt-1'><img src={modalImg} alt="modal-img" /></Col>

            <Col lg={12} md={12} sm={12} className='mb-4' style={{fontSize: '32px', fontWeight: '600', color: '#FEA633', maxWidth: '300px', textAlign: 'center', lineHeight: '30px'}}>У вас есть новость для нас?</Col>
            <Col lg={12} md={12} sm={12} className='mb-4' style={{fontSize: '14px', fontWeight: '400', color: '#000000', maxWidth: '385px', textAlign: 'center'}}>Отправьте ее нам. Мы будем очень благодарны!</Col>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3'><MyInput type='text' value={modalNewsMessage.name} onChange={(e) => {setModalNewsMessage({...modalNewsMessage, name: e.target.value})}} placeholder={'Ваше имя'} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '44px', }} required></MyInput></Col>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3'><MyInput type='phone' value={modalNewsMessage.phone} onChange={(e) => {setModalNewsMessage({...modalNewsMessage, phone: e.target.value})}} placeholder={'Ваш телефон'} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '44px', }}></MyInput></Col>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3'><MyInput type='text' value={modalNewsMessage.email} onChange={(e) => {setModalNewsMessage({...modalNewsMessage, email: e.target.value})}} placeholder={'Ваша почта'} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '44px', }}></MyInput></Col>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-items-center mb-3'><MyTextArea onChange={(e) => {setModalNewsMessage({...modalNewsMessage, message: e.target.value})}} value={modalNewsMessage.message} cols={14} rows={5} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '137px', paddingTop: '10px', outline: 'none'}} placeholder='Сообщение'></MyTextArea></Col>


            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-items-center mb-3' style={{width: '90%'}}>
                <Col><MyCheckBox text={'Я даю свое согласие на обработку моих персональных данных'} checked={chk} onChange={() => {setChk(prev => !prev)}}  href={'https://utvchannel.tw1.su/agreet/agreet.pdf'}/></Col>
            </Col>



            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-items-center mb-3'><MyButton text={'Отправить'} onClick={() => {sendTgMessage()}} style={{width: '90%', height: '44px', borderRadius: '8px'}} className='modal_button_submit'></MyButton></Col>
      </Col>


      </Col>

    </Col>

  )
}

export default ModalNews
