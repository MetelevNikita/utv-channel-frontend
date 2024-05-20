import { FC, CSSProperties } from 'react'

//

interface ButtonProps {
  text: string
  onClick: () => void
  style?: CSSProperties
}


const MyButton: FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>{text}</button>
  )
}

export default MyButton
