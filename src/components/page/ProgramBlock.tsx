import { FC, useState } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components


import ProgramCard from './program/ProgramCard'

// server


import headerProject from '../../server/HeaderProject'



const ProgramBlock = () => {

  const [idCard, setIdCard] = useState(1)
  const checkedCard = headerProject.filter((card) => card.id === idCard)
  console.log(checkedCard[0])


  const isActive = {
    marginLeft: '15px',
    marginRight: '20px',
    borderRadius: '10px',
    border: '2px solid #FEA633',
  }


  const disActive = {
    marginLeft: '15px',
    marginRight: '20px',
    borderRadius: '10px',
    border: '0px solid #FEA633',
  }





  return (

    <Col md={12} sm={12} xs={12} style={{width: '100%'}} className='mt-5'>

      <Col md={12} sm={12} xs={12} className='d-flex align-items-center justify-content-center mb-4'><ProgramCard imgBig={checkedCard[0].imgBig} title={checkedCard[0].title} subtitle={checkedCard[0].subtitle} description={checkedCard[0].description} date={checkedCard[0].date.toDateString()} link={checkedCard[0].link}  /></Col>



      <Col md={12} sm={12} xs={12} className='d-flex flex-row' style={{width: '100%', overflow: 'hidden'}}>

        <Col className='d-flex flex-row' style={{position:'relative', left: '0px'}}>
          {(headerProject.length < 1) ? <></> : headerProject.map((card, index) => {
            return <img key={index} onClick={() => {setIdCard(card.id)}} style={(checkedCard[0].id === card.id) ? isActive : disActive} src={card.imgSmall} alt="img" />
          })}
        </Col>

      </Col>

    </Col>

  )
}

export default ProgramBlock
