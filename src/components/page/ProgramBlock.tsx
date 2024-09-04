import { FC, useState, useEffect } from 'react'
import { useSpring, useSpringRef, animated } from '@react-spring/web'

//

import { Col, Row } from 'react-bootstrap'

// components


import ProgramCard from './program/ProgramCard'


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


  const dispatch = useAppDispatch()
  const programSelector: programCardType[] = useAppSelector(state => state.program.program)
  const [idCard, setIdCard] = useState(1)
  const checkedCard = programSelector.filter((item, index) => index + 1 === idCard)


  const isActive = {
    height: '162px',
    width: '286px',
    marginLeft: '15px',
    marginRight: '20px',
    border: '2px solid #FEA633',
  }


  const disActive = {
    height: '162px',
    width: '286px',
    marginLeft: '15px',
    marginRight: '20px',
    border: '0px solid #FEA633',
  }





  if(programSelector.length < 1) {
    return <Col lg={12} md={12} sm={12} xs={12} style={{width: '50%', height: 'max-content', textAlign: 'center'}}>Loading...</Col>
  }



  const shortDescription = checkedCard[0].description.slice(0, 100) + '...'



  return (

    <Col md={12} sm={12} xs={12} className='mt-5'>

      <Col md={12} sm={12} xs={12} className='d-flex align-items-center justify-content-center mb-4'><ProgramCard image={checkedCard[0].image} title={checkedCard[0].title} subtitle={checkedCard[0].subtitle} description={shortDescription} date={checkedCard[0].date} link={checkedCard[0].link} /></Col>

      <Col md={12} sm={12} xs={12} className='d-flex flex-row'>

        <Col className='d-flex flex-row'>
          {(programSelector.length < 1) ? <></> : programSelector.map((card, index) => {
            return <Col key={index} lg={3} md={3} sm={3} xs={3} className='d-none d-xl-block'><img onClick={() => { setIdCard(card.id - 1) } } style={(checkedCard[0].id === card.id) ? isActive : disActive} src={card.image} alt="img" /></Col>
          })}
        </Col>

      </Col>

    </Col>

  )
}

export default ProgramBlock
