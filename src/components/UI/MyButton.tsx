import { FC, CSSProperties } from 'react'

//

interface ButtonProps {
  text: string
  onClick: () => void
  style?: CSSProperties
  className?: string
}


const MyButton: FC<ButtonProps> = ({ text, onClick, style, className }) => {
  return (
    <button className={className} style={style} onClick={onClick}>{text}</button>
  )
}

export default MyButton
