import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

//

interface NewsMainPreviewCardProps {
  title: string
  lead: string
  image: string
  video: string
  date: string
  author: string
  imgWidth: string
  imgHeight: string

}

const NewsMainPreviewCard: FC<NewsMainPreviewCardProps> = ({ title, lead, image, date, author, imgHeight, imgWidth}) => {
  return (

    <Col lg={12} md={12} sm={12} xs={12} className='d-flex mb-3'>

        <Col lg={5} md={6} sm={6} xs={6} style={{borderRadius: '10px'}}>

            <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>

                {(!image) ? <iframe width={'100%'} src="https://www.youtube.com/embed/p3RFMEixUOE?si=YG824gJifpeQzhxA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> : <img style={{width: imgWidth, height: imgHeight}} src={image} alt="img" />}

            </div>

        </Col>

        <Col lg={7} md={6} sm={6} xs={6} style={{marginLeft: '10px'}}>

            <Col style={{fontSize: 'max( 12px,  0.3vw )', fontWeight: '600', color: 'black', height: 'max-content'}} className='mb-4'>{title}</Col>

            <Col className='d-flex' style={{fontSize: '11px', fontWeight: '400', color: 'grey'}}>

                <Col>{date}</Col>
                <Col>{author}</Col>

            </Col>

        </Col>

    </Col>

  )
}

export default NewsMainPreviewCard
