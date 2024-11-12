// css

import '../../../styles/animation.css'

//

import { CSSProperties, FC, useState, useRef, useEffect, forwardRef } from 'react'

//

import { Col, Row } from 'react-bootstrap'

//

interface SheduleCardProps {
  time: string
  title: string
  subtitle?: string
  marker: string
  style?: CSSProperties
  className?: any
  onClick?: (e: any) => void
  onMouseIn?: (e: any) => void
  onMouseOut?: (e: any) => void
  ref: any


}








const SheduleCard:FC<SheduleCardProps> = forwardRef(({time, title, subtitle, marker, onClick, onMouseIn, onMouseOut, className}, ref) => {



  const [showSubtitle, setShowSubtitle] = useState(false)




  return (


    <Col lg={12} md={12} sm={12} xs={12} style={{width: '100%'}} ref={ref} className={className} onClick={onClick} onMouseOut={onMouseOut} onMouseOver={onMouseIn}>
      <Col className='d-flex flex-row align-items-center justify-content-center'>
          <Col className='d-flex flex-row align-items-center justify-content-start' lg={2} md={1} sm={1} xs={2} style={{fontSize: 'calc(0.5em + 0.5vw)', fontWeight: '600', marginTop: '10px'}}>{time}</Col>
          <Col className='d-flex flex-row align-items-end' lg={5} md={6} sm={6} xs={6} style={{fontSize: 'calc(0.5em + 0.4vw)'}}>{title}</Col>
          <Col className='d-flex flex-row align-items-center justify-content-start' style={{cursor: 'pointer'}} lg={1} md={1} sm={1} xs={1} onClick={() => {setShowSubtitle(prev => !prev)}}><div className='card_btn'>&#9660;</div></Col>
          <Col className='d-flex flex-row align-items-center justify-content-end' lg={3} md={3} sm={3} xs={2} style={{fontSize: 'calc(0.5em + 0.5vw)'}}>{marker}</Col>
      </Col>



    {(showSubtitle) ? <Col className='d-flex flex-row' style={{fontSize: '10px', marginTop: '10px', marginLeft: '20px', marginRight: '20px'}} lg={10} md={10} sm={10} xs={10}>{subtitle}</Col> : <></>}


    <Col className='d-flex flex-row align-items-center justify-content-start' style={{width: '100%', height: '1px', marginTop: '10px', backgroundColor: '#FEA633'}} lg={10} md={10} sm={10} xs={10}></Col>
    </Col>


  )
})

export default SheduleCard
