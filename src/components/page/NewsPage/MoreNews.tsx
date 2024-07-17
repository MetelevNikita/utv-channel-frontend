import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyTags from '../../UI/MyTags'



interface MoreNewsProps {
  title: string,
  lead: string,
  author: string,
  date: string,
  tag: string[]
}


const MoreNews: FC<MoreNewsProps> = ({ title, lead, author, date, tag }) => {


  return (

    <Col md={12} sm={12} xs={12} style={{width: '100%', height: 'max-content', padding: '30px', border: '1px solid black', borderRadius: '5px'}}>

        <Col md={8} sm={12} xs={12} className='d-flex mb-3'>

          <Col md={3} style={{fontSize: '14px', color: '#3C3C3C'}}>{date}</Col>
          <Col md={5} style={{fontSize: '14px', color: '#3C3C3C'}}>{author}</Col>

        </Col>

          <Col style={{fontSize: '20px', fontWeight: '600', maxWidth: '565px'}} className='mb-3'>{title}</Col>
          <Col style={{fontSize: '16px', fontWeight: '400', maxWidth: '726px', height: 'max-content'}} className='mb-3'>{lead}</Col>

        <Col ld={12} md={12} sm={12} xs={12} className='d-flex flex-wrap'>

          {(tag.length <= 1) ? <></> : tag.map((card, index) => {
            return <Col key={index} lg={3} md={3} style={{margin: '10px'}}><MyTags tag={card} /></Col>
          })}

        </Col>


    </Col>
  )
}

export default MoreNews