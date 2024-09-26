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
}

const NewsPreviewCard: FC<NewsPreviewCardProps> = ({ img, video, title, date, author, colorTitle, colorDate }) => {
  return (

    <Col lg={12} md={12} sm={12} xs={12} className={`d-flex justify-content-center flex-column`}>

        <Col lg={12} md={12} sm={12} xs={12} style={{maxWidth: '384px', maxHeight: '209px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='mb-3'>

          {(!img) ? <iframe style={{width: '384px', height: '209px'}} src={video}></iframe> : <img style={{width: "384px", height: "259px"}} src={img} alt="news-preiview-image" />}

        </Col>


      <Col lg={12} md={12} sm={12} className='d-flex flex-column'>

      <Col style={{fontSize: 'calc(0.6em + 0.2vw)', fontWeight: 600, color: colorTitle, width: '90%', maxWidth: '384px', height: '75px'}} className='mb-2'>{title}</Col>

      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-row' style={{width: '100%'}}>
          <Col  className='d-flex justify-content-start mb-3' style={{fontSize: 'calc(0.6em + 0.2vw)', fontWeight: '300', color: colorDate, width: '100%', height: 'max-content'}}>Дата: {date}</Col>
          <Col  className='d-flex justify-content-start mb-3' style={{fontSize: 'calc(0.6em + 0.2vw)', fontWeight: '300', color: colorDate, width: '100%'}}>{(author === '') ? '' : `Автор: ${author}`}</Col>
      </Col>

      </Col>
    </Col>
  )
}

export default NewsPreviewCard
