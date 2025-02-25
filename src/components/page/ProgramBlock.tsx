import { FC, useState, useEffect } from 'react'
import { useSpring, useSpringRef, animated } from '@react-spring/web'

//

import { Col, Row } from 'react-bootstrap'

// components


import ProgramCard from './program/ProgramCard'
import MyImageAnimation from '../UI/MyImageAnimation'


// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHooks'
import { getAsyncProgram } from '../../store/programSlice'


// type

import { programCardType } from '../../types/types'

//


const ProgramBlock: FC = () => {

  useEffect(() => {dispatch(getAsyncProgram())}, [])


  const randomCard = () => {

    const max = 1
    const min = 4
    const random = Math.floor(Math.random() * (max - min + 1)) + min

    return random

  }



  const dispatch = useAppDispatch()
  const programSelector: programCardType[] = useAppSelector(state => state.program.program)
  const [idCard, setIdCard] = useState(randomCard())
  const checkedCard = programSelector.filter((item, index) => index+1 === idCard)
  const currentList = programSelector.filter((item, index) => index <= 3)



  if(programSelector.length < 1) {
    return <Col className='d-flex flex-md-row flex-column mb-3 mt-5' style={{fontSize: '26px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FA8129'}}>Загрузка...</Col>
  }

  const shortDescription = checkedCard[0].description.slice(0, 100) + '...'


  return (

    <Col md={12} sm={12} xs={12} className='mt-5 d-none d-sm-block'>

      <Col md={12} sm={12} xs={12} className='d-flex mb-4'><ProgramCard image={checkedCard[0].image} title={checkedCard[0].title} subtitle={checkedCard[0].subtitle} description={shortDescription} date={checkedCard[0].date} link={checkedCard[0].link} /></Col>



        <Col lg={12} md={12} className='d-flex flex-row d-xs-none'>
          {(programSelector.length < 1) ? <Col className='d-flex flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col> : currentList.map((card, index) => {
            return <Col key={index}  style={{margin: '10px'}} className='d-flex align-items-center justify-content-center'>

                  <MyImageAnimation onClick={() => {setIdCard(index+1)}} image={card.image} width={'100%'} height={'100%'} scaleStart={1.1} scaleEnd={1}/>

                  </Col>


          })}
        </Col>


    </Col>

  )
}

export default ProgramBlock
