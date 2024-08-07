import { FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyButton from '../../UI/MyButton'

//


interface ProgramCardProps {
  image: string
  title: string
  subtitle: string
  description: string
  date: string
  link: string

}


const openProgram = (link: string) => {
  window.open(link, '_blank')
}


const ProgramCard: FC<ProgramCardProps> = ({ image, title, subtitle, date, description, link }) => {


  const [styles, api] = useSpring(() => ({
    from: {
      transform: 'scale(100%)',
      border: '1px solid #FEA633',
      borderRadius: '30px',
      width: '160px',
      height: '41px',
      color: '#FEA633',
      backgroundColor: 'black',

      },

  }))



  const changeButtonMove = () => {
    api.start({

      to: {
        transform: 'scale(110%)',
        border: '1px solid #FEA633',
        borderRadius: '30px',
        width: '160px',
        height: '41px',
        color: 'white',
        backgroundColor: '#FEA633'

      }

    })

  }


  const changeButtonOut = () => {
    api.start({
      to: {
        transform: 'scale(100%)',
        border: '1px solid #FEA633',
        borderRadius: '30px',
        width: '160px',
        height: '41px',
        color: '#FEA633',
        backgroundColor: 'black',
      }
    })
  }


  return (

      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-row' style={{width: '100%'}}>

            <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center' style={{zIndex: 2, backgroundColor: 'black', height: '400px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}>

                  <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>

                      <Col lg={12} md={12} sm={12} xs={12} style={{fontSize: '12px', fontWeight: '200', color: 'white'}}>{date}</Col>

                      <Col md={12} sm={12} xs={12} className='mb-3'>

                        <Col style={{fontSize: '35px', fontWeight: '800', color: 'white'}}>{title}</Col>
                        <Col style={{fontSize: '27px', fontWeight: '400', color: 'white'}}>{subtitle}</Col>

                      </Col>

                      <Col md={12} sm={12} xs={12} className='mb-4' style={{fontSize: '14px', fontWeight: '200', color: 'white', height: '70px'}}>{description}</Col>

                      <Col md={12} sm={12} xs={12}><animated.div style={styles} onMouseMove={() => {changeButtonMove()}} onMouseLeave={() => {changeButtonOut()}}><MyButton style={{width: '160px', height: '41px'}} text={'Смотреть'} onClick={()  => {openProgram(link)}}/></animated.div></Col>

                  </Col>


            </Col>


            <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-start' style={{maxWidth: '650px', overflow: 'hidden', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>

                <img src={image} alt="img-big" style={{zIndex: -1 , width: '100%'}}/>

            </Col>

      </Col>




  )
}

export default ProgramCard
