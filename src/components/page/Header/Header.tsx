// css

import '../../../styles/animation.css'

//

import { FC, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

//

import { Col, Container, Row } from 'react-bootstrap'

// router

import { Link } from 'react-router-dom'

// component

import MyInput from '../../UI/MyInput'
import SearchIcon from '../../UI/SearchIcon'

// img

import logo from '../../../asset/header/logo.svg'
import search from '../../../asset/header/search.svg'


interface MenuHeader {
  title: string
  link: string
}

interface HeaderProps {
  find: any
}


const Header: FC<HeaderProps> = ({ find }) => {


  const {findNews, setFindNews} = find
  const [colorIcon, setColorIcon] = useState('')


  const menuHeader: MenuHeader[] = [
    {
      title: 'Новости',
      link: '/news'
    },

    {
      title: 'Телепрограмма',
      link: '/program'
    },

    {
      title: 'Проекты',
      link: '/project'
    },

    {
      title: 'Прямой эфир',
      link: '/live'
    },

    {
      title: 'О канале',
      link: '/about'
    },

  ]


  const [styles, api] = useSpring(() => ({
    opacity: 0
  }))


  return (


    <Container style={{width: '100%', height: '100%'}}>

        <Col className='d-flex align-items-center flex-md-row flex-column mt-4'>

        <Col md={2} sm={12} xs={12} className='d-flex justify-content-md-start justify-content-center mb-4'><Link to={'/'}><img src={logo} alt="logo-utv"/></Link></Col>

        <Col md={7} sm={12} xs={12} className='d-flex justify-content-center flex-md-row flex-column mb-4'>
          {menuHeader.map((item, index) => {
            return <Col key={index} className='d-flex justify-content-center align-items-center mb-md-0 mb-2'><Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', width: '150px', textAlign: 'center'}} to={item.link}><div className='header_menu_animation'>{item.title}</div></Link></Col>
          })}
        </Col>


        <Col md={3} sm={12} xs={12} className='d-flex justify-content-end align-items-center flex-md-row flex-column mb-4'>
          <Col style={{marginRight: '20px'}} className='d-flex align-items-center justify-content-end mb-md-0 mb-4'><SearchIcon className='header_search_icon' onClick={() => {api.start({opacity: 1})}}/></Col>




          <animated.div style={{fontSize: '15px', fontWeight: 'bold', color: '#FEA633', width: '184px', minHeight: '45px', border: '1px solid #FEA633', borderRadius: '45px', ...styles}}><MyInput style={{minHeight: '45px', width: '184px', display: 'flex', justifyContent: 'center', paddingLeft: '10px', paddingRight: '10px'}} type='text' placeholder='' value={findNews} onChange={(e) => {setFindNews(e.target.value)}}></MyInput></animated.div>
        </Col>

        </Col>

    </Container>






  )
}

export default Header
