// css

import '../../styles/animation.css'

//

import { FC } from "react"

// components

import MyImageAnimation from './MyImageAnimation'

//

interface ContactsIconProps {
  img: string
  title: string
  info: string
}

const ContactsIcon: FC<ContactsIconProps> = ({ img, title, info }) => {
  return (
    <div className="d-flex flex-column align-items-center">


      <MyImageAnimation image={img} width='72px' height='72px' scaleEnd={1} scaleStart={0.8}/>
      <div className="mt-2" style={{fontWeight: '600'}}>{title}</div>
      <div className="mt-1">{info}</div>

    </div>
  )
}

export default ContactsIcon
