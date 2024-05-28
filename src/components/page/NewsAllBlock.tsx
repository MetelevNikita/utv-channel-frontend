import { FC } from 'react'
import { Link } from 'react-router-dom'

//

import { Col, Row } from 'react-bootstrap'

// components

import NewsCard from './news/NewsCard'


//

interface NewsCardProps {
  img: string
  imgSecong?: string
  imgThird?: string
  title: string
  description?: string
  date: string
  views: number

}

interface NewsAllBlockProps {
  newsTitle: string;
  newsButton: string;
  linkButton: string;
  cards: any[]
}



const NewsAllBlock: FC<NewsAllBlockProps> = ({ newsTitle, newsButton, linkButton, cards})  =>  {

  return (

      <Col md={12} sm={12} xs={12} style={{width: '410px'}}>

      <Col md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center' style={{height:  '46px', backgroundColor: '#FEA633', borderRadius: '5px'}}  >

        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center' style={{fontSize: '19px', fontWeight: 'bold', color: 'white'}}>{newsTitle}</Col>
        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center'><Link style={{textDecoration: 'none', fontSize: '13px', color: 'white'}} to={linkButton}>{newsButton}</Link></Col>

      </Col>


      <Col style={{height: '457px', overflowY: 'scroll'}}>

          {(cards.length < 1) ? <></> : cards.map((news: any, index: number) => {
            return <NewsCard key={index} img={news.imgTitle} title={news.title} date={news.date} views={news.views}/>
          })}

      </Col>


      </Col>
  )
}

export default NewsAllBlock
