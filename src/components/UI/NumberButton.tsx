import { FC } from 'react'
import styled from 'styled-components'

//

interface NumberButtonProps  {
  num: number,
  page: any
}

const NumberButton: FC<NumberButtonProps>  =  ({num, page})  =>  {


  const { setPageNumber } = page

  const NewButton = styled.button`

    &:hover {
      transform: scale(1.20);
      color: 'red';
      transition: all 0.02s ease-in-out;

    }
  `


  return (

    <NewButton style={{width: '30px', height: '30px', background:'#FFF6EA', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FEA633', marginRight: '20px'}} value={2} onClick={() => {setPageNumber(num)}}>{num}</NewButton>


  )
}

export default NumberButton