import { FC, useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { readPostAsync } from '../../store/readPostSlice'

//

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// components


import NewsReadCard from './Main-news/NewsReadCard'


// server

import NewsRead from '../../server/NewsRead'





const NewsBlock = () => {


  useEffect(() => {
    dispatch(readPostAsync())
  }, [])


  const dispatch =  useDispatch()
  const postRead = useSelector((state: any) => state.readPost.post)


  return (

    <Col md={12} sm={12} xs={12} style={{width: '410px'}}>

      <Col md={12} sm={12} xs={12} style={{width:'100%', height: '46px', background: 'linear-gradient(94deg, rgba(242,173,16,0.9020044543429844) 0%, rgba(255,218,0,1) 0%, rgba(232,24,12,1) 100%)', borderRadius: '5px'}}className='d-flex flex-row align-items-center'>


          <Col style={{width: '100%'}} className='d-flex justify-content-around'>

            <Col style={{width: '100%', fontSize: '19px', color: 'white', fontWeight: 'bold'}} className='d-flex justify-content-center'>Главное</Col>
            <Col style={{width: '100%', fontSize: '12px', color: 'white'}} className='d-flex justify-content-center align-items-center'><Link style={{textDecoration: 'none', color: 'white'}} to="/">Смотреть все</Link></Col>

          </Col>

      </Col>



      <Col md={12} sm={12} xs={12} style={{width: '100%', height: '457px', background: '#FFF3E3', overflowY: 'scroll'}}>

        <Col>

        {(NewsRead.length < 1) ? <></> : postRead.map((news: any, index: number) => {
            return <Col key={index} style={{marginLeft: '10px', marginBottom: '10px'}}><NewsReadCard title={news.title} description={news.description} id={news.id} date={news.date}></NewsReadCard></Col>
          })}

        </Col>




      </Col>



    </Col>

  )
}

export default NewsBlock
