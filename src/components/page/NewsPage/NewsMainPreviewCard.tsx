import { FC } from 'react'

//

import { Col } from 'react-bootstrap'

//

interface NewsMainPreviewCardProps {
  title: string
  lead: string
  image: string
  video: string
  date: string
  author: string
}

const NewsMainPreviewCard: FC<NewsMainPreviewCardProps> = ({ title, lead, image, date, author, video}) => {
  return (

    <Col lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-around mb-3'>

        <Col lg={4} md={6} sm={6} xs={6} style={{overflow: 'hidden', minHeight: '130px', maxHeight: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '7px'}}>

                {(!image) ? <div><iframe width={'100%'} height={'100%'} src={video} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div> : <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={image} alt="img" />}

        </Col>

        <Col lg={6} md={6} sm={5} xs={5} className='d-flex flex-column'>

            <Col style={{fontSize: 'calc(0.6em + 0.2vw)', fontWeight: '600', color: 'black', height: 'max-content'}} className='mb-2'>{title}</Col>

            <Col lg={12} mb={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column' style={{fontSize: 'calc(0.5em + 0.2vw)', fontWeight: '400', color: 'grey'}}>

                <Col lg={5} mb={5} sm={12} xs={12} className='mb-1'>{date}</Col>
                <Col lg={5} mb={5} sm={12} xs={12} className='mb-1'>{author}</Col>


            </Col>

        </Col>

    </Col>

  )
}

export default NewsMainPreviewCard
