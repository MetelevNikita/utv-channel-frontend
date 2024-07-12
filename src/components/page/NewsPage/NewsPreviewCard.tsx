import { FC } from 'react'

// img

import newsPrev from '../../../asset/news/news-preview-img.png'

//

import { Col, Row } from 'react-bootstrap'
import { CSSProperties } from 'styled-components'

//


interface NewsPreviewCardProps {
  img: string
  title: string
  date: string
  author: string
  colorTitle: string
  colorDate: string
  sizeBlock: {
    width: string
    height: string
    flex: string
    sizeTitle: string
    sizeInfo: string
  }
}

const NewsPreviewCard: FC<NewsPreviewCardProps> = ({ img, title, date, author, colorTitle, colorDate, sizeBlock }) => {
  return (

    <Col lg={12} mb={12} style={{width: sizeBlock.width, height: sizeBlock.height}} className={`d-flex ${sizeBlock.flex} justify-content-around`}>

      <Col className='d-flex justify-content-start mb-2'><img style={{width: '90%', height: 'max-content'}} src={img} alt="news-preiview-image" /></Col>


      <Col>

      <Col md={12} style={{fontSize: sizeBlock.sizeTitle, fontWeight: 600, color: colorTitle, width: '90%'}} className='mb-2'>{title}</Col>

      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-row' style={{width: '100%'}}>
          <Col  className='d-flex justify-content-start' style={{fontSize: sizeBlock.sizeInfo, fontWeight: '300', color: colorDate, width: '100%', height: 'max-content'}}>Дата: {date}</Col>
          <Col  className='d-flex justify-content-start' style={{fontSize: sizeBlock.sizeInfo, fontWeight: '300', color: colorDate, width: '100%'}}>Автор: {author}</Col>
      </Col>

      </Col>
    </Col>
  )
}

export default NewsPreviewCard
