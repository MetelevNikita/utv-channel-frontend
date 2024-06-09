import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'


// components

import MyTags from '../../UI/MyTags'
import NewsReadCard from '../Main-news/NewsReadCard'


//

const NewsContainer = () => {


  const tags = ['все новости', 'Политика', 'Экономика', 'Общество', 'В мире', 'Криминал', 'Спорт', 'Технологии', 'Здоровье', 'Культура']

  return (
    <Row>



      <Col md={8} sm={8} xs={8}></Col>



      <Col md={4} sm={4} xs={4} style={{position: 'fixed'}}>

          <Col><NewsReadCard id={0} title={''} description={''} date={''} /></Col>
          <Col><NewsReadCard id={0} title={''} description={''} date={''} /></Col>


          {(tags.length < 1) ? <></> : tags.map((tag, index) => {
            return <Col><MyTags tag={tag}/></Col>
          })}

      </Col>




    </Row>
  )
}

export default NewsContainer