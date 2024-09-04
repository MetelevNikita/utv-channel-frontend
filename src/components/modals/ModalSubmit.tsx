import { FC } from 'react'

//

import { Container, Col } from 'react-bootstrap'

// components

import MyButton from '../UI/MyButton'

interface ModalSubmitProps {
  title: string
  buttonTitle: string
  fn: () => any
}


const ModalSubmit:FC<ModalSubmitProps> = ({ title, buttonTitle, fn }) => {

  return (

    <Col style={{width: '100%', height: '100vh', backgroundColor: '#0000007a', position: 'fixed', top: '0px'}}>

        <Col className='d-flex flex-column justify-content-center align-items-center' style={{width: '600px', height: '230px', backgroundColor: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%', borderRadius: '10px'}}>

          <div style={{fontSize: '32px', fontWeight: '700', color: '#FEA633'}}>{title}</div>
          <MyButton className='mt-3' style={{width: '210px', height: '45px', color: 'white', backgroundColor: '#FEA633', borderRadius:'10px'}} text={buttonTitle} onClick={() => {fn()}}></MyButton>

        </Col>

    </Col>
  )
}

export default ModalSubmit
