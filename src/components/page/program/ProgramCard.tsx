import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyButton from '../../UI/MyButton'




//


interface ProgramCardProps {
  imgBig: string
  title: string
  subtitle: string
  description: string
  date: string
  link: string

}


const ProgramCard: FC<ProgramCardProps> = ({ imgBig, title, subtitle, date, description, link }) => {
  return (

    <Col style={{width: '100%'}}>
      <Col className='d-flex justify-content-center flex-column'>

          <Row>
            <Col className='d-flex justify-content-center flex-column' style={{width: '100%'}}><img src={imgBig} alt="img-big" /></Col>
          </Row>


          <Row style={{position: 'absolute', marginLeft: '140px'}}>

            <Col md={12} sm={12} xs={12}>

              <Col md={6} sm={6} xs={6} style={{fontSize: '12px', fontWeight: '200'}}>{date}</Col>

              <Col md={6} sm={6} xs={6} className='mb-3'>

                <Col style={{fontSize: '35px', fontWeight: '800'}}>{title}</Col>
                <Col style={{fontSize: '27px', fontWeight: '400'}}>{subtitle}</Col>

              </Col>

              <Col md={6} sm={6} xs={6} className='mb-4'>{description}</Col>

              <Col><MyButton style={{width: '160px', height: '41px', border: '1px solid #FEA633', borderRadius: '67px ', color: '#FEA633'}} text={'Смотреть'} onClick={()  => {console.log('click')}}/></Col>

            </Col>

          </Row>




      </Col>
    </Col>



  )
}

export default ProgramCard
