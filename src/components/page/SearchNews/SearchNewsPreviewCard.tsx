
import { FC } from 'react'

//

import { Col } from 'react-bootstrap'

//


interface SearchNewsPreviewCardProps {
  title: string
  lead: string
  date: string
  author: string
}




const SearchNewsPreviewCard: FC<SearchNewsPreviewCardProps> = ({ title, lead, date, author }) => {
  return (

    <Col lg={12} md={12} sm={12} xs={12}>

      <Col>{title}</Col>

      <Col>{lead}</Col>

      <Col className='d-flex flex-row' lg={12} md={12} sm={12} >

          <Col>{date}</Col>
          <Col>{author}</Col>

      </Col>


    </Col>

  )
}

export default SearchNewsPreviewCard
