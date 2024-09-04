import { CSSProperties, FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

//

interface MyInputProps  {
  type: string,
  placeholder: string,
  onChange: (e: any) => any,
  value: string,
  style: CSSProperties
  required?: boolean
}

const MyInput: FC<MyInputProps> = ({ type, placeholder, onChange, value, style, required}) => {
  return (
    <input className='d-flex' style={{...style, outline: 'none'}} type={type} placeholder={placeholder} onChange={onChange} value={value} required={required}/>

  )
}

export default MyInput
