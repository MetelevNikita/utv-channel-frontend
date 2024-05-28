import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//

interface NewsReadCardProps {
  id: number
  title: string,
  description: string,
  date: string
}

const NewsReadCard: FC<NewsReadCardProps> = ({ id, title, description, date }) => {
  return (

    <Link to={`read/${id}`} style={{textDecoration: 'none', color: 'black'}}>

        <div style={{margin: '10px'}}>

        <Col style={{width: '100%', height: 'max-content'}} className='mb-2'>{title}</Col>
        <Col style={{width: '100%', height: 'max-content'}} className='mb-3'>{description}</Col>
        <Col style={{width: '100%', height: 'max-content', fontSize: '12px'}}>{date}</Col>

        </div>

    </Link>



  )
}

export default NewsReadCard

