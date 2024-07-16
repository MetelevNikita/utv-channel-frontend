import { FC, useState } from 'react'

//

import { Container, Col, Row } from 'react-bootstrap'

//

import { YMaps, Map } from '@pbe/react-yandex-maps';

//

const MyMaps = () => {


  return (

    <Container className='mt-2 mb-2'>

        <YMaps>

            <Map width={'100%'} height={'400px'} defaultState={{center: [54.74, 55.96], zoom: 14}}></Map>

        </YMaps>

    </Container>

  )
}

export default MyMaps
