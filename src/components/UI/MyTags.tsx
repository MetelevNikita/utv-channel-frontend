import { FC } from'react'

//

import { Col } from 'react-bootstrap'

//

interface  MyTagsProps  {
  tag: string

}

const MyTags: FC<MyTagsProps> = ({ tag }) => {
  return (

    <Col style={{width: '100%', height: '46px', border: '1px solid black', borderRadius: '5px', padding: '30px'}}>{tag}</Col>
  )
}

export default MyTags