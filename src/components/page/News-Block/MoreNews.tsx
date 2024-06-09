import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyTags from '../../UI/MyTags'


const MoreNews = () => {
  return (

    <Col>

        <Col>

          <Col>DATE</Col>
          <Col>AVTOR</Col>

        </Col>


        <Col>TITLE TITLE TITLE TITLE TITLE TITLE TITLE</Col>

        <Col>SUBTITLE SUBTITLE SUBTITLE SUBTITLE SUBTITLE</Col>


        <Col>

          <MyTags tag={'tag1'} />

        </Col>


    </Col>
  )
}

export default MoreNews