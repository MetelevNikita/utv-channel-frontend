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


const ProgramBlock = () => {

  const api = useSpringRef()
  const styles = useSpring({
    ref: api,
    from: {
      transform: 'scale(100%)'
    }
  })



  const handleZoom = (id: any) => {
      api.start({
        to: {
          transform: styles.transform.get() === 'scale(100%)' ? 'scale(120%)' : 'scale(100%)'
        }
      })

  }


  useEffect(() => {dispatch(getAsyncProgram())}, [])


  const randomCard = () => {


    const max = 0
    const min = 5
    const random = Math.floor(Math.random() * (max - min + 1)) + min

    return random

  }




  const dispatch = useAppDispatch()
  const programSelector: programCardType[] = useAppSelector(state => state.program.program)
  const [idCard, setIdCard] = useState(randomCard())
  const checkedCard = programSelector.filter((item, index) => index + 1 === idCard)







  if(programSelector.length < 1) {
    return <Col lg={12} md={12} sm={12} xs={12} style={{width: '50%', height: 'max-content', textAlign: 'center'}}>Loading...</Col>
  }

  const shortDescription = checkedCard[0].description.slice(0, 100) + '...'


  return (

    <Col md={12} sm={12} xs={12} className='mt-5'>

      <Col md={12} sm={12} xs={12} className='d-flex mb-4'><ProgramCard image={checkedCard[0].image} title={checkedCard[0].title} subtitle={checkedCard[0].subtitle} description={shortDescription} date={checkedCard[0].date} link={checkedCard[0].link} /></Col>



        <Col lg={12} md={12} className='d-flex flex-row d-xs-none'>
          {(programSelector.length < 1) ? <Col className='d-flex flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col> : programSelector.map((card, index) => {
            return <Col key={index}  style={{margin: '10px'}} className='d-flex align-items-center justify-content-center'>

                  <MyImageAnimation onClick={() => {setIdCard(card.id)}} image={card.image} width={'70px'} height={'100%'} scaleStart={1.1} scaleEnd={1}/>

                  </Col>


          })}
        </Col>


    </Col>

  )
}

export default ProgramBlock
