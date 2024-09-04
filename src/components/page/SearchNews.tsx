import { FC, useState, useEffect } from 'react'

//

import { Container, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHooks'
import { getAsyncNews } from '../../store/newsSlice'

// components

import SearchNewsPreviewCard from './SearchNews/SearchNewsPreviewCard'
import MoreNews from './NewsPage/MoreNews'

interface SearchNewsProps {
  search: any
}

const SearchNews: FC<SearchNewsProps> = ({ search }) => {



  useEffect(() => {
    dispatch(getAsyncNews())
  }, [])

  const dispatch = useAppDispatch()
  const allNews = useAppSelector((state) => state.news.news)


  const {searchNews, setSearchNews} = search


  const searchNewsCards = allNews.filter((item) => {
    return item.title.includes(searchNews) || item.lead.includes(searchNews) || item.author.includes(searchNews) || item.tags.includes(searchNews)
  })


  console.log(searchNewsCards)





  return (
    <Container>



      <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='mb-5 mt-3'>Результаты поиска</Col>

        <Col className='mt-4 mb-4' lg={12} md={12} sm={12} xs={12}>


        {(searchNewsCards.length < 1) ? <Col>Список пуст</Col> : searchNewsCards.map((item, index) => {
          return <Col className='mb-3'><Link style={{color: 'black'}} to={`/news/${item.id}`}><MoreNews key={index} title={item.title} lead={item.lead} date={item.date} author={item.author} tag={item.tags.split(' ')} /></Link></Col>
        })}


        </Col>


    </Container>

  )
}

export default SearchNews
