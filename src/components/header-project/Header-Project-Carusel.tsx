import { FC, useState } from 'react'

//

import { Col } from 'react-bootstrap';

// cauresel

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

// server

import headerProject from '../../server/HeaderProject';
import MyButton from '../UI/MyButton';



// component

import HeaderProjectCard from './Header-Project-Card';



const HeaderProjectCarusel: FC = () => {


  const [slide, setSlide] = useState<number>(0);


  const slideNext = () => {

    if(slide <= -2560) {
      setSlide(0);

    }

    setSlide((prev) => prev - 640)


  }



  const slidePrev = () => {

    if(slide >= 0) {
      return;

    }

    setSlide((prev) => prev + 1320)



    setSlide((prev) => prev + 1320)
  }




  console.log(slide)



  return (
    <Col md={12} sm={12} xs={12} style={{width: '100%'}} className='d-flex flex-column justify-content-center'>



          <Col style={{width: '100%', height: 'max-content', overflow: 'hidden'}} className='d-flex'>

            {headerProject.map((item, index) => {
              return <HeaderProjectCard key={index} title={item.title} description={item.description} imgBig={item.imgBig} slider={{slide, setSlide}}></HeaderProjectCard>
            })}

          </Col>



          <Col className='d-flex'>

            <Col><MyButton style={{width: '100%', height: '45px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '67px'}} text={'Назад'} onClick={() => {slidePrev()}}></MyButton></Col>
            <Col><MyButton style={{width: '100%', height: '45px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '67px'}} text={'Вперед'} onClick={() => {slideNext()}}></MyButton></Col>

          </Col>











    </Col>
  )
}

export default HeaderProjectCarusel
