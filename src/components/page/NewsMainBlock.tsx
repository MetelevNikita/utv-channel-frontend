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

      <Col md={12} sm={12} xs={12} className='d-flex flex-column align-items-center'>

      <Col md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{height:  '46px', width: '95%', backgroundColor: '#FEA633'}}  >

        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center' style={{fontSize: '13px', fontWeight: '500', color: 'white'}}>{newsTitle}</Col>
        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center'><Link style={{textDecoration: 'none', fontSize: '13px', color: 'white'}} to={linkButton}>{newsButton}</Link></Col>

      </Col>


      <Col md={12} sm={12} xs={12} style={{height: 'max-content', width: '95%'}}>

          {newsArr.map((news: any, index: any) =>  {
            return <Col md={12} key={index} style={{width: '450px', height: 'max-content', overflow: 'hidden', padding: '5px'}} className='d-flex mt-3 mb-2'><Link to={`/news/${news.id}`} key={index}><NewsMainPreviewCard image={news.image_1} title={news.title} lead={news.lead} date={news.date} author={news.author} video={news.video} imgHeight={'122px'} imgWidth={'100%'}/></Link></Col>
          })}

      </Col>


      </Col>
  )
}

export default NewsMainBlock
