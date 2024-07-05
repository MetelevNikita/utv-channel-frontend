// css

import '../../styles/animation.css'

//

import { FC, CSSProperties } from 'react'

//

import { Col } from 'react-bootstrap'


//

interface MyButtonLinkProps {

  linkTitle: string,
  linkImg: string
  style?: CSSProperties
}

const MyButtonLink: FC<MyButtonLinkProps> = ({ linkTitle, linkImg, style }) => {
  return (

      <Col style={style} className='d-flex justify-content-center align-items-center animation_container'>

        <div className='animation_box' style={{display: 'flex'}}>

        <img className='animation_img' style={{width: '50px', height: '50px'}} src={linkImg} alt="link-img" />
        <div className='animation_text' style={{marginLeft: '20px', maxWidth: '260px'}}>{linkTitle}</div>

        </div>
      </Col>

  )
}

export default MyButtonLink
