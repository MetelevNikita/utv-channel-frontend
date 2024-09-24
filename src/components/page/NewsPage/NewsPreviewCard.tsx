import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

//


interface NewsPreviewCardProps {
  img: string | any
  video: string | any
  title: string
  date: string
  author: string
  colorTitle: string
  colorDate: string
  sizeBlock: {
    flex: string
    sizeTitle: string
    sizeInfo: string
  }
}

const NewsPreviewCard: FC<NewsPreviewCardProps> = ({ img, video, title, date, author, colorTitle, colorDate, sizeBlock }) => {
  return (

    <Col lg={12} md={12} className={`d-flex ${sizeBlock.flex} justify-content-around`}>

        <Col style={{minWidth: '100%'}} className='mb-3'>
        <div style={{minWidth: '100%', height: '209px', overflow: 'hidden' , display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
          {(!img) ? <iframe style={{overflow: 'hidden', width: '90%', height: '209px'}} src={video}></iframe> : <img style={{width: "384px", height: "209px"}} src={img} alt="news-preiview-image" />}
        </div>

        </Col>


      <Col>

      <Col md={4} style={{fontSize: sizeBlock.sizeTitle, fontWeight: 600, color: colorTitle, width: '90%', maxWidth: '384px', height: '75px'}} className='mb-2'>{title}</Col>

      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-row' style={{width: '100%'}}>
          <Col  className='d-flex justify-content-start mb-3' style={{fontSize: sizeBlock.sizeInfo, fontWeight: '300', color: colorDate, width: '100%', height: 'max-content'}}>Дата: {date}</Col>
          <Col  className='d-flex justify-content-start mb-3' style={{fontSize: sizeBlock.sizeInfo, fontWeight: '300', color: colorDate, width: '100%'}}>{(author === '') ? '' : `Автор: ${author}`}</Col>
      </Col>

      </Col>
    </Col>
  )
}

export default NewsPreviewCard
