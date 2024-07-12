import { FC } from 'react'
import { Link } from 'react-router-dom'

//

import { Col, Row } from 'react-bootstrap'

// components

import NewsPreviewCard from './NewsPage/NewsPreviewCard'

//



interface NewsAllBlockProps {
  newsTitle: string;
  newsButton: string;
  linkButton: string;
  newsArr: any
}



const NewsMainBlock: FC<NewsAllBlockProps> = ({ newsTitle, newsButton, linkButton, newsArr})  =>  {


  return (

      <Col md={12} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>

      <Col md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center' style={{height:  '46px', width: '90%', backgroundColor: '#FEA633', borderRadius: '5px'}}  >

        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center' style={{fontSize: '13px', fontWeight: '500', color: 'white'}}>{newsTitle}</Col>
        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center'><Link style={{textDecoration: 'none', fontSize: '13px', color: 'white'}} to={linkButton}>{newsButton}</Link></Col>

      </Col>


      <Col style={{height: 'max-content', width: '90%'}}>

          {newsArr.map((news: any, index: any) =>  {
            return <Col style={{width: '100%', height: 'max-content'}} className='d-flex mt-3 mb-2'><Link to={news.id} key={index}><NewsPreviewCard img={news.imgTitle} title={news.title} date={news.date} author={news.author} colorTitle={'#000000'} colorDate={'#8F8F8F'} sizeBlock={{width: '100%', height: 'max-content' , flex: 'flex-row', sizeTitle: '0.7vw', sizeInfo: '0.5vw'}}/></Link></Col>
          })}

      </Col>


      </Col>
  )
}

export default NewsMainBlock
