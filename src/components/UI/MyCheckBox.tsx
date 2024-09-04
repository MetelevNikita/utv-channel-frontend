import { FC } from 'react'

//

interface MyCheckBoxProps {
  text: string
  checked: boolean
  onChange: () => any

}

const MyCheckBox: FC<MyCheckBoxProps> = ({ text, checked, onChange}) => {
  return (
    <div className='d-flex flex-row'>

      <input type="checkbox" checked={checked} onChange={onChange}/>
      <div style={{fontSize: '12px', width: '328px', height: 'max-content', marginLeft: '15px'}}>{text}</div>

    </div>
  )
}

export default MyCheckBox
