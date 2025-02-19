import { FC } from 'react'

//

import { Container, Col, Row } from 'react-bootstrap'

// components

import AskQuestion from '../UI/AskQuestion'

// yandex

import { YMaps, Map, Placemark, TypeSelector } from '@pbe/react-yandex-maps';



//

interface ContactsProps {
  modalAgree: any
  modalDisAgree: any
}

interface InfoProps {
  title: string;
  text: string;
}



const Contacts: FC<ContactsProps> = ({ modalAgree, modalDisAgree }) => {


  const infoArr: InfoProps[] = [
    {
      title: 'Адресс',
      text: 'г. Уфа, просп. Октября, 4/2  этаж 2'
    },

    {
      title: 'Телефон редакции',
      text: '+7 (347) 246-54-54'
    },

    {
      title: 'По вопросам рекламы',
      text: '+7 (347) 246-54-54'
    }
  ]



  return (

    <Container className='mt-5'>

      <Row>


        <Col md={3} className='d-flex justify-content-md-start justify-content-center flex-column flex-column mb-4'>

            <Col className='mb-4' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Контакты</Col>


            {infoArr.map((item, index) => {
              return <Col className='mb-4' key={index}>
                        <Col className='mb-2' style={{color: '#FA8129', fontSize: '20px', fontWeight: '600'}}>{item.title}</Col>
                        <Col className='mb-2' style={{color: '#000000', fontSize: '20px', fontWeight: '300'}}>{item.text}</Col>
                      </Col>
            })}

        </Col>


          <Col md={9} >
              <YMaps>
                <Map defaultState={{ center: [54.740385, 55.988398], zoom: 17 }} width={'100%'} height={'400px'}>

                <Placemark geometry={[54.740385, 55.988398]}/>
                <TypeSelector/>

                </Map>
              </YMaps>
          </Col>

      </Row>


      <Row className='mt-5'>


      <Col className='mb-4' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Если у вас есть вопрос, мы с радостью ответим</Col>


      <AskQuestion modalAgree={modalAgree} modalDisAgree={modalDisAgree}/>


      </Row>



    </Container>

  )
}

export default Contacts