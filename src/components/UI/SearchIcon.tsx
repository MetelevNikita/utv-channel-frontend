

import {FC, useState} from 'react'

//

interface SearchIconProps {
  onClick: (event: any) => void
  className?: string
}

const SearchIcon: FC<SearchIconProps> = ({ className, onClick }) => {

  const [colorState, setColorState] = useState('black')


  return (
    <div className={className} onClick={onClick} onMouseOver={() => {setColorState('#FEA633')}} onMouseOut={() => {
      setColorState('black')
    }}>

      <svg width="24" height="24" viewBox="0 0 24 24" fill={colorState} xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_196)">
      <path d="M6.9928 18.1231C6.94647 18.2146 6.89069 18.301 6.82638 18.3809C5.07066 20.1421 3.31137 21.8982 1.54852 23.6494C1.38361 23.8073 1.18098 23.9204 0.959947 23.9778C0.61709 24.0649 0.279943 23.8729 0.1078 23.5659C0.0245263 23.4176 -0.0127381 23.248 0.000744757 23.0785C0.0142277 22.909 0.0778524 22.7474 0.183519 22.6141C0.247402 22.5393 0.315109 22.4678 0.386374 22.3999L5.62209 17.165C5.69352 17.0936 5.75495 17.0222 5.81995 16.9579C2.00566 12.4298 2.85994 5.90466 7.11709 2.3697C11.1671 -0.993894 17.0649 -0.759706 20.8964 2.94089C24.6364 6.5501 25.0471 12.5283 21.8378 16.6181C20.7043 18.0859 19.1938 19.219 17.4671 19.8967C15.7354 20.5858 13.8469 20.7835 12.0099 20.4679C10.1521 20.1623 8.50637 19.3819 6.9928 18.1231ZM13.7071 18.8193C14.8255 18.8194 15.9329 18.599 16.9659 18.1708C17.999 17.7426 18.9375 17.1149 19.7276 16.3238C20.5177 15.5326 21.1439 14.5934 21.5705 13.56C21.9971 12.5266 22.2156 11.4193 22.2135 10.3014C22.2136 9.18331 21.9932 8.07617 21.565 7.04327C21.1368 6.01036 20.5091 5.07195 19.7178 4.28167C18.9266 3.4914 17.9872 2.86476 16.9536 2.43758C15.9199 2.0104 14.8121 1.79106 13.6935 1.79209C12.575 1.79209 11.4675 2.01256 10.4343 2.44089C9.40118 2.86921 8.46266 3.49699 7.6725 4.28829C6.88233 5.07958 6.25603 6.01887 5.82943 7.05239C5.40283 8.0859 5.18431 9.19337 5.18638 10.3114C5.19138 15.0237 9.00495 18.8328 13.7035 18.8186L13.7071 18.8193Z"/>
      </g>
      <defs>
      <clipPath id="clip0_2_196">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>

    </div>
  )
}

export default SearchIcon