import { FC } from 'react'
import { Link } from 'react-router-dom'

//

import { Col, Row } from 'react-bootstrap'

// components

import NewsCard from './Main-news/NewsCard'


//

interface NewsCardProps {
  id: number | string
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
  newsArr: NewsCardProps[]
}



const NewsAllBlock: FC<NewsAllBlockProps> = ({ newsTitle, newsButton, linkButton, newsArr})  =>  {




  return (

      <Col md={12} sm={12} xs={12} style={{width: '90%'}}>

      <Col md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center' style={{height:  '46px', backgroundColor: '#FEA633', borderRadius: '5px'}}  >

        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center' style={{fontSize: '19px', fontWeight: 'bold', color: 'white'}}>{newsTitle}</Col>
        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center'><Link style={{textDecoration: 'none', fontSize: '13px', color: 'white'}} to={linkButton}>{newsButton}</Link></Col>

      </Col>


      <Col style={{height: '457px', overflowY: 'scroll'}}>

          {(newsArr.length < 1) ? <></> : newsArr.map((news: any, index: number) => {
            return <NewsCard key={index} img={news.imagetitle} title={news.title} date={news.date} views={news.views}/>
          })}

      </Col>


      </Col>
  )
}

export default NewsAllBlock
