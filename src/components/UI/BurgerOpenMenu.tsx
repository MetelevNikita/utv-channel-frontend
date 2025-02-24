import '../../styles/animation.css'

import { FC } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


//img


import vk from '../../asset/logo-social-burger-menu/vk.svg'
import tg from '../../asset/logo-social-burger-menu/tg.svg'
import yt from '../../asset/logo-social-burger-menu/yt.svg'
import wa from '../../asset/logo-social-burger-menu/wa.svg'
import ok from '../../asset/logo-social-burger-menu/ok.svg'


interface adressBlockProps {
  title: string
  info: string
}


const adressBlock: adressBlockProps[] = [
  {
    title: 'Адрес',
    info: 'Республика Башкортостан, г. Уфа, просп. Октября, 4/2  этаж 2'
  },

  {
    title: 'Телефон редакции',
    info: '+7 (347) 246 - 54 - 54'
  }

]



interface logoArrProps {
  img: string
  link: string
}


const logoArr: logoArrProps[] = [
  {
    img: vk,
    link: 'https://vk.com/utvrussia'
  },

  {
    img: tg,
    link: 'https://t.me/s/utvufa'
  },

  {
    img: yt,
    link: 'https://www.youtube.com/channel/UCvCcbnj9Ls2RrxFfUZVGi_w'
  },

  {
    img: wa,
    link: 'https://www.youtube.com/channel/UCvCcbnj9Ls2RrxFfUZVGi_w'
  },

  {
    img: ok,
    link: 'https://ok.ru/utvrussia'
  }

]



const BurgerOpenMenu: FC = () => {
  return (

      <Col>


      <Col style={{width: '100%', height: '1px', backgroundColor: '#FA8129'}} className='mb-4 mt-4'></Col>

      <Col xs={12} className='d-flex'>

            <Col xs={6}>
                <Col style={{fontSize: '12px', fontWeight: '600'}}>Давайте дружить</Col>
                <Col style={{fontSize: '12px', fontWeight: '400'}}>Подписывайтесь на нас</Col>
            </Col>


            <Col xs={6} className='d-flex align-items-center justify-content-between'>
                {logoArr.map((item: logoArrProps, index: number): React.ReactNode => {
                  return <Link className='animation_logo_arr' to={item.link}><img src={item.img} alt={item.link}/></Link>
                })}
            </Col>

      </Col>


      <Col xs={12} style={{width: '100%', height: '1px', backgroundColor: '#FA8129'}} className='mb-4 mt-4'></Col>


      <Col xs={12}>

        {adressBlock.map((item: adressBlockProps, index: number): React.ReactNode => {
          return <Col className='mb-4'>
            <Col style={{fontSize: '15px', fontWeight: '600', color: '#FA8129'}} className='mb-1'>{item.title}</Col>
            <Col style={{fontSize: '14px', fontWeight: '400', width: '200px'}}>{item.info}</Col>
          </Col>
        })}

      </Col>


      <Col xs={12} style={{width: '100%', height: '1px', backgroundColor: '#FA8129'}} className='mb-3 mt-3'></Col>





      </Col>

  )
}

export default BurgerOpenMenu
