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

      <Col md={12} sm={12} xs={12} style={{width: '90%'}}>

      <Col md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center' style={{height:  '46px', backgroundColor: '#FEA633', borderRadius: '5px'}}  >

        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center' style={{fontSize: '19px', fontWeight: 'bold', color: 'white'}}>{newsTitle}</Col>
        <Col md={6} sm={6} xs={6} className='d-flex justify-content-center align-items-center'><Link style={{textDecoration: 'none', fontSize: '13px', color: 'white'}} to={linkButton}>{newsButton}</Link></Col>

      </Col>


      <Col style={{height: '457px', width: '100%'}}>


          {newsArr.map((news: any, index: any) =>  {
            return <Col style={{width: '100%', height: '140px'}} className='d-flex mt-3 mb-2'><Link to={news.id} key={index}><NewsPreviewCard img={news.imgTitle} title={news.title} date={news.date} author={news.author} colorTitle={'#000000'} colorDate={'#8F8F8F'} sizeBlock={{width: '450px', height: '140px' , flex: 'flex-row', sizeTitle: '15px', sizeInfo: '12px', marginBlock: '20px'}}/></Link></Col>
          })}

      </Col>


      </Col>
  )
}

export default NewsMainBlock
