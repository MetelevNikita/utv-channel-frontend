import { FC } from'react'

//

import { Col } from 'react-bootstrap'

//

interface  MyTagsProps  {
  tag: string

}

const MyTags: FC<MyTagsProps> = ({ tag }) => {
  return (

    <Col style={{width: '183px', height: '26px', border: '1px solid black', borderRadius: '5px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{tag}</Col>
  )
}

export default MyTags