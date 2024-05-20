import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// component

import MyButton from '../UI/MyButton'

// img




interface HeaderProjectCardProps {
  title?: string
  description?: string
  imgBig?: string
  imgSmall?: string
  slider: any
}

const HeaderProjectCard: FC<HeaderProjectCardProps> = ({title, description, imgBig, imgSmall, slider}) => {

  const {slide, setSlide} = slider

  return (

    <Col className='d-flex justify-content-center align-items-center' style={{width: '100%', position: 'relative', left: slide + 'px', transition: '1s all ease'}}>

      <Col style={{width: '1320px', position: 'relative', left: slide + 'px', transition: '1s all ease'}} className='d-flex justify-content-center align-items-center'>
        <img src={imgBig} alt="img" />
      </Col>

    </Col>










  )
}

export default HeaderProjectCard
