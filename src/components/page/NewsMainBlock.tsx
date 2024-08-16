import { FC } from 'react'
import { Link } from 'react-router-dom'

//

import { Col, Row } from 'react-bootstrap'

// components

import NewsMainPreviewCard from './NewsPage/NewsMainPreviewCard'

//



interface NewsMainBlockProps {
  newsTitle: string;
  newsButton: string;
  linkButton: string;
  newsArr: any
  video?: string
}



const NewsMainBlock: FC<NewsMainBlockProps> = ({ newsTitle, newsButton, linkButton, newsArr, video})  =>  {


  return (

      <Col md={12} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>

      <Col md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center' style={{height:  '46px', width: '90%', backgroundColor: '#FEA633', borderRadius: '5px'}}  >

        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center' style={{fontSize: '13px', fontWeight: '500', color: 'white'}}>{newsTitle}</Col>
        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center'><Link style={{textDecoration: 'none', fontSize: '13px', color: 'white'}} to={linkButton}>{newsButton}</Link></Col>

      </Col>


      <Col style={{height: 'max-content', width: '90%'}}>

          {newsArr.map((news: any, index: any) =>  {
            return <Col key={index} style={{width: '100%', height: 'max-content', overflow: 'hidden'}} className='d-flex mt-3 mb-2'><Link to={`/news/${news.id}`} key={index}><NewsMainPreviewCard image={news.image_1} title={news.title} lead={news.lead} date={news.date} author={news.author} video={news.video} imgHeight={'120px'} imgWidth={'200px'}/></Link></Col>
          })}

      </Col>


      </Col>
  )
}

export default NewsMainBlock
