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

// types

import { INewsType } from '../../types/types'

interface SearchNewsProps {
  search: any
}

const SearchNews: FC<SearchNewsProps> = ({ search }) => {


  const {searchNews, setSearchNews} = search

  useEffect(() => {
    dispatch(getAsyncNews())
  }, [])

  const dispatch = useAppDispatch()
  const allNews: INewsType[] | any = useAppSelector((state) => {
    return state.news.news
  })



  if (allNews.length < 1) {
    return <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col>
  }


  const searchNewsCards = allNews.filter((item: INewsType) => {
    return item.title.includes(searchNews) || item.lead.includes(searchNews) || item.author.includes(searchNews) || item.tags.includes(searchNews)
  }).sort((a: any, b:any) => b.id - a.id)




  const getCardsDate = () => {

    let arrDate: any = []
    const arrDateNews = Array.from(new Set(searchNewsCards.map((item: INewsType) => {
      return item.date
    })))


    for (let [key, value] of Object.entries(arrDateNews)) {
      arrDate.push(value)
    }
    return arrDate
  }

  const dateArr = getCardsDate()


  const filterDateArr = dateArr.map((date: any) => {
    return searchNewsCards.filter((card: any) => {
      return card.date == date
    })
  })




  return (
    <Container>

      <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='mb-5 mt-3'>Результаты поиска</Col>

        <Col className='mt-4 mb-4' lg={12} md={12} sm={12} xs={12}>



        {dateArr.length < 1 ? <Col>Список пуст</Col> : filterDateArr.map((item: any, index: number) => {

          return <Col key={index}>

                  <Col md={12} sm={12} xs={12} style={{fontSize: '20px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA533', textDecorationThickness: '5px'}} className='mb-5 mt-3'>{item[0].date}</Col>

                  {item.map((item: INewsType,) => {
                    return <Col key={item.id} className='mb-3'><Link style={{color: 'black'}} to={`/news/${item.id}`}><MoreNews key={index} title={item.title} lead={item.lead} date={item.date} author={item.author} tag={item.tags.split(' ')} /></Link></Col>

                  })}


                  </Col>

        })}


        </Col>

    </Container>

  )
}

export default SearchNews
