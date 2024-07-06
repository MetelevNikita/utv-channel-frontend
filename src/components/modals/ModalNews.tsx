// css

import '../../styles/animation.css'

import { FC } from 'react'

//

import { Container, Col, Row } from 'react-bootstrap'


// img


import modalImg from '../../asset/modal-news/modal-news.icon.png'

// components

import MyInput from '../UI/MyInput'
import MyTextArea from '../UI/MyTextArea'
import MyButton from '../UI/MyButton'

//


interface ModalNewsProps  {
  modalMessage: {modalNewsMessage: any, setModalNewsMessage: any}
  modalOpen: {modalNewsOpen: boolean, setModalNewsOpen: any}
}


const ModalNews: FC<ModalNewsProps>  = ({ modalMessage, modalOpen }) => {


  const {modalNewsMessage, setModalNewsMessage} = modalMessage
  const {modalNewsOpen, setModalNewsOpen} = modalOpen




  return (

    <Col lg={12} md={12} sm={12} xs={12} style={{width: '100%', height: '100vh', backgroundColor: '#21252947', position: 'fixed', top: '0px'}}>

      <Col style={{width: '489px', height: '803px', backgroundColor: 'white', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '8px'}}>

      <Col md={12} sm={12} className='d-flex flex-column justify-content-center align-items-center mt-1'>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-end mb-2 mt-1'>

                  <Col lg={2} md={2} sm={2} style={{width: '25px', background: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'white', marginRight: '20px', marginTop: '10px', cursor: 'pointer'}} onClick={() => {setModalNewsOpen(false)}}>X</Col>

            </Col>


            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3 mt-1'><img src={modalImg} alt="modal-img" /></Col>

            <Col lg={12} md={12} sm={12} className='mb-4' style={{fontSize: '32px', fontWeight: '600', color: '#FEA633', maxWidth: '300px', textAlign: 'center', lineHeight: '30px'}}>У вас есть новость для нас?</Col>
            <Col lg={12} md={12} sm={12} className='mb-4' style={{fontSize: '14px', fontWeight: '400', color: '#000000', maxWidth: '385px', textAlign: 'center'}}>Отправте ее нам. Мы будем очень благодарны!</Col>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3'><MyInput type='text' value={''} onChange={() => {}} placeholder={'asda'} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '44px', }}></MyInput></Col>
            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3'><MyInput type='text' value={''} onChange={() => {}} placeholder={'asda'} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '44px', }}></MyInput></Col>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center mb-3'><MyInput type='text' value={''} onChange={() => {}} placeholder={'asda'} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '44px', }}></MyInput></Col>

            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-items-center mb-3'><MyTextArea onChange={() => {}} value={''} cols={14} rows={5} style={{paddingLeft: '10px', border: '1px solid #D1D1D1', borderRadius: '8px', width: '90%', height: '137px', paddingTop: '10px', outline: 'none'}} placeholder='текст'></MyTextArea></Col>


            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-items-center mb-3' style={{width: '90%'}}>

                <Col lg={1} md={1} sm={1}><input type="checkbox" /></Col>
                <Col lg={11} md={11} sm={11} style={{fontSize: '12px'}}>Я согласен на обработку персональных данных и ознакомлен с условиями пользовательского соглашения </Col>

            </Col>



            <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-items-center mb-3'><MyButton text={'Отправить'} onClick={() => {console.log('click')}} style={{width: '90%', height: '44px', borderRadius: '8px'}} className='modal_button_submit'></MyButton></Col>
      </Col>


      </Col>

    </Col>

  )
}

export default ModalNews
