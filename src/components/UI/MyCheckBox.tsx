import { FC } from 'react'

//

interface MyCheckBoxProps {
  text: string
  checked: boolean
  onChange: () => any
  href?: string

}

const MyCheckBox: FC<MyCheckBoxProps> = ({ text, checked, onChange, href}) => {
  return (
    <div className='d-flex flex-row'>

      <input type="checkbox" checked={checked} onChange={onChange}/>
      <a style={{fontSize: '12px', width: '328px', height: 'max-content', marginLeft: '15px', color: '#565656'}} href={href} >{text}</a>

    </div>
  )
}

export default MyCheckBox
