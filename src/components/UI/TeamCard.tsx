import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// componsnts

import MyImageAnimation from '../UI/MyImageAnimation'

interface TeamCardProps  {
  img: string,
  name: string,
  profession: string,
}



const TeamCard: FC<TeamCardProps> = ({ img, name, profession }) => {
  return (
    <Col className='d-flex flex-column align-items-md-start align-items-center'>

      <Col className='mb-2' style={{width: '286px', overflow: 'hidden'}}>
      <MyImageAnimation image={img} width={'286px'} height={'100%'} scaleStart={1.1} scaleEnd={1}/>
      </Col>

      <Col md={12} sm={12} xs={12} className='d-flex flex-column align-items-md-start align-items-center'>

        <Col style={{height: 'max-content', fontSize: '20px', color: '#000000'}} className='mb-2'>{name}</Col>
        <Col style={{height: 'max-content', fontSize: '14px', color: '#525252'}} className='mb-4'>{profession}</Col>

      </Col>

    </Col>
  )
}

export default TeamCard