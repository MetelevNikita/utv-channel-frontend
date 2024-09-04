import { FC } from "react"

//

import { Col, Row } from "react-bootstrap"

//

interface ContactsIconProps {
  img: string
  title: string
  info: string
}

const ContactsIcon: FC<ContactsIconProps> = ({ img, title, info }) => {
  return (
    <div className="d-flex flex-column align-items-center">

      <img style={{width: '72px'}} src={img} alt="icon_img" />
      <div className="mt-2" style={{fontWeight: '600'}}>{title}</div>
      <div className="mt-1">{info}</div>

    </div>
  )
}

export default ContactsIcon
