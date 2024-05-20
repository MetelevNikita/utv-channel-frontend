import { FC, CSSProperties } from 'react'

//

import { Link } from 'react-router-dom'


//

interface MyButtonLinkProps {

  linkTitle: string,
  linkHref: string
  linkImg: string
  style?: CSSProperties

}

const MyButtonLink: FC<MyButtonLinkProps> = ({ linkTitle, linkHref, linkImg, style }) => {
  return (

      <Link style={style} to={linkHref} className='d-flex justify-content-center align-items-center'>
        <img style={{width: '50px', height: '50px'}} src={linkImg} alt="link-img" />
        <div style={{marginLeft: '20px', maxWidth: '260px'}}>{linkTitle}</div>
      </Link>

  )
}

export default MyButtonLink
