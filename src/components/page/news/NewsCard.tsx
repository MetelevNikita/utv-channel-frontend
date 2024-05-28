import { FC } from "react"
import { Link } from  "react-router-dom"

//

import { Col, Row } from "react-bootstrap"


interface NewsCardProps {
  img: string
  imgSecong?: string
  imgThird?: string
  title: string
  description?: string
  date: string
  views: number

}

const NewsCard: FC<NewsCardProps> = ({ img, imgSecong, imgThird, title, description, date, views })  =>  {
  return (

    <Link to={'/'}>
    <Col md={12} sm={12} xs={12} className="d-flex mt-4 mb-5">

        <Col md={6} sm={6} xs={6}>
          <img src={img} alt="news-card-img" />
        </Col>


        <Col md={6} sm={6} xs={6}>
          <Col style={{width: '190px', fontSize: '13px', fontWeight: 'bold', color: 'black'}}>{title}</Col>

          <Col md={6} sm={6} xs={6} className="d-flex mt-4">

            <Col md={6} sm={6} xs={6} className="d-flex justify-content-center align-items-center'" style={{width: '100%', fontSize: '10px', color: '#8F8F8F'}}>{date}</Col>
            <Col md={6} sm={6} xs={6} className="d-flex justify-content-center align-items-center'" style={{width: '100%', fontSize: '10px', color: '#8F8F8F'}}>{views}</Col>

          </Col>
        </Col>

    </Col>
    </Link>

  )
}

export default NewsCard
