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

const NewsMainPreviewCard: FC<NewsMainPreviewCardProps> = ({ title, lead, image, date, author, imgHeight, imgWidth, video}) => {
  return (

    <Col lg={12} md={12} sm={12} xs={12} className='d-flex mb-3'>

        <Col lg={5} md={6} sm={6} xs={6} style={{borderRadius: '10px'}}>

            <div style={{width: '100%', height: '130px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                {(!image) ? <iframe width={'100%'} height={'100%'} src={video} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> : <img style={{width: imgWidth, height: imgHeight}} src={image} alt="img" />}

            </div>

        </Col>

        <Col lg={7} md={6} sm={6} xs={6} style={{marginLeft: '10px',}}>

            <Col style={{fontSize: '12px', fontWeight: '600', color: 'black', height: 'max-content', width: '95%'}} className='mb-2'>{title}</Col>

            <Col className='d-flex' style={{fontSize: '10px', fontWeight: '400', color: 'grey'}}>

                <div>{date}</div>
                <div style={{marginLeft: '20px'}}>{author}</div>


            </Col>

        </Col>

    </Col>

  )
}

export default NewsMainPreviewCard
