// css

import '../../../styles/animation.css'

//

import { CSSProperties, FC } from 'react'

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
}








const SheduleCard:FC<SheduleCardProps> = ({ time, title, subtitle, marker, onClick, onMouseIn, onMouseOut, className }) => {

  return (

    <Col lg={12} md={12} sm={12} xs={12} className={className} onClick={onClick} onMouseOut={onMouseOut} onMouseOver={onMouseIn}>

      <Col className='d-flex flex-row align-items-center justify-content-center'>

          <Col className='d-flex flex-row align-items-center justify-content-center' lg={2} md={1} sm={1} xs={2} style={{fontSize: 'calc(0.5em + 0.5vw)', fontWeight: '600'}}>{time}</Col>
          <Col className='d-flex flex-row align-items-center' lg={6} md={6} sm={6} xs={7} style={{fontSize: 'calc(0.5em + 0.3vw)'}}>{title}</Col>
          <Col className='d-flex flex-row align-items-center justify-content-center' lg={3} md={3} sm={3} xs={3} style={{fontSize: 'calc(0.5em + 0.5vw)'}}>{marker}</Col>

      </Col>

      <Col lg={12} md={12} sm={12} xs={12}>{subtitle}</Col>

    </Col>

  )
}

export default SheduleCard
