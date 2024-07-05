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
}

const MyInput: FC<MyInputProps> = ({ type, placeholder, onChange, value, style }) => {
  return (
    <input className='d-flex' style={style} type={type} placeholder={placeholder} onChange={onChange} value={value}/>

  )
}

export default MyInput
