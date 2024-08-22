import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

//

interface TeamCardProps  {
  img: string,
  name: string,
  profession: string,
}



const TeamCard: FC<TeamCardProps> = ({ img, name, profession }) => {
  return (
    <Col>

      <Col className='mb-2' style={{width: '286px', overflow: 'hidden'}}><img style={{width: '286px'}} src={img} alt="" /></Col>

      <Col md={12} sm={12} xs={12}>

        <Col style={{height: 'max-content', fontSize: '20px', color: '#000000'}} className='mb-2'>{name}</Col>
        <Col style={{height: 'max-content', fontSize: '16px', color: '#525252'}} className='mb-2'>{profession}</Col>

      </Col>

    </Col>
  )
}

export default TeamCard