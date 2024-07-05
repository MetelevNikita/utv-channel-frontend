import { CSSProperties, FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

//

interface MyTextAreaProps  {
  onChange: (e: any) => void
  value: string
  cols: number
  rows: number
  placeholder: string
  style: CSSProperties

}

const MyTextArea: FC<MyTextAreaProps> = ({ onChange, value, cols, rows, style, placeholder }) => {
  return (

<textarea style={style} onChange={onChange} value={value} cols={cols} rows={rows} placeholder={placeholder}></textarea>
  )
}

export default MyTextArea
