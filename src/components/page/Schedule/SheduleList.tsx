import { FC, useState, useEffect } from 'react'
import moment from 'moment'

//

import { Col, Container, Row } from 'react-bootstrap'

// redux

import { useAppDispatch, useAppSelector } from '../../../types/reduxHooks'
import { getAsyncEpg } from '../../../store/epgSlice'

// components

import SheduleCard from './SheduleCard'



const SheduleList = () => {

  const [timeState, setTimeState] = useState('')
  const timer = new Date().toTimeString()


  setInterval(() => {
    setTimeState(timer)
  }, 30000)

  const dispatch = useAppDispatch()
  const epgSelector: any = useAppSelector(state => state.epg.epg)


  const currentDate = new Date().toLocaleDateString()
  const currentDay = new Date().toDateString().split(' ')[0]
  const currentTime = new Date().toTimeString().slice(0, 5)






  const [selectDay, setSelectDay] = useState(currentDay.slice(0, 3))


  const dayWeek = [

    {
      ru: 'Понедельник',
      en: 'Monday',
    },

    {
      ru: 'Вторник',
      en: 'Tuesday',
    },
    {
      ru: 'Среда',
      en: 'Wednesday',
    },
    {
      ru: 'Четверг',
      en: 'Thursday',
    },
    {
      ru: 'Пятница',
      en: 'Friday',
    },
    {
      ru: 'Суббота',
      en: 'Saturday',
    },
    {
      ru: 'Воскресенье',
      en: 'Sunday',
    }

]

  useEffect(() => {
    dispatch(getAsyncEpg())
    }, [])


    useEffect(() => {
      getCurrentTimeIndex()
    }, [timeState])




  if (!epgSelector) {
    return <div>Loading...</div>
  }


  const currentDaySelector = epgSelector.filter((item: any, index: any) => {
    return item.date[0] === selectDay
  })




  const getCurrentTimeIndex = () => {

    for (let i = 0; i < currentDaySelector.length; i++) {
      if (currentDaySelector[i].time > currentTime) {
        return currentDaySelector[i-1]
      }
    }
  }





  const currentTimeSelector =  getCurrentTimeIndex()




  return (

    <Container>
    <Row className='mt-5'>


    <Row md={12} sm={12} xs={12} style={{width: '100%'}}>

      <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Программа передач</Col>

    </Row>



    <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-column mt-5 mb-4'>


        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column justify-content-center mb-5'>
        {dayWeek.map((item, index) => {
          return <Col style={{height: '51px', width: '100%', padding: '20px'}} key={index} className={(item.en.slice(0,3) !== selectDay) ? 'd-flex justify-content-center align-items-center schedule_btn' : 'd-flex flex-row justify-content-center align-items-center schedule_btn schedule_btn_checked'} onClick={() => {setSelectDay(item.en.slice(0,3))}}>{item.ru}</Col>
        })}
        </Col>



      <Row>
        <Col style={{width: '100%', height: '400px', overflow: 'auto'}} className='d-flex flex-column align-items-center'>
          {
              currentDaySelector.map((item: any, index: any) => {
              return <SheduleCard className={(item.time !== currentTimeSelector.time) ? 'd-flex flex-column card' : 'd-flex flex-column card_active'} key={index} title={item.title} time={item.time} marker={item.marker}/>
            })
          }
        </Col>
      </Row>

    </Col>

    </Row>
    </Container>

  )
}

export default SheduleList
