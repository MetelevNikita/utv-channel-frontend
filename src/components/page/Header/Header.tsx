// css

import '../../../styles/animation.css'

//

import { FC, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

//

import { Col, Container } from 'react-bootstrap'

// router

import { Link } from 'react-router-dom'

// component

import MyInput from '../../UI/MyInput'
import SearchIcon from '../../UI/SearchIcon'

// img

import logo from '../../../asset/header/Logotype_UTV.svg'
import search from '../../../asset/header/search.svg'


interface MenuHeader {
  title: string
  link: string
}

interface HeaderProps {
  search: any
}


const Header: FC<HeaderProps> = ({search}) => {


  const [searchText, setSearchText] = useState('')
  const {searchNews, setSearchNews} = search


  const menuHeader: MenuHeader[] = [
    {
      title: 'Новости',
      link: '/news'
    },

    {
      title: 'Проекты',
      link: '/project'
    },

    {
      title: 'О канале',
      link: '/about'
    },

    {
      title: 'Контакты',
      link: '/contacts'
    },

  ]



  const searchTextHandler = () => {

    setSearchNews(searchText)
    setSearchText('')
  }



  return (


    <Container style={{width: '100%', height: '100%'}}>

        <Col className='d-flex align-items-center flex-md-row flex-column mt-4'>

        <Col md={2} sm={12} xs={12} className='d-flex justify-content-md-start justify-content-center mb-4'><Link to={'/'}><img style={{width: '100px'}} className='logo_menu_animation' src={logo} alt="logo-utv"/></Link></Col>

        <Col md={7} sm={12} xs={12} className='d-flex justify-content-center flex-md-row flex-column mb-4'>
          {menuHeader.map((item, index) => {
            return <Col key={index} className='d-flex justify-content-center align-items-center mb-md-0 mb-2'><Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', width: '150px', textAlign: 'center'}} to={item.link}><div className='header_menu_animation'>{item.title}</div></Link></Col>
          })}
        </Col>


          <Col md={3} sm={12} xs={12} className='d-flex justify-content-lg-end justify-content-center align-items-center flex-row mb-4'>


            <Link to={'/search'}><SearchIcon onClick={() => {searchTextHandler()}} className='d-flex align-items-center header_search_icon'/></Link>
            <MyInput style={{marginLeft: '10px', height: '45px', width: '184px', display: 'flex', justifyContent: 'center', paddingLeft: '10px', paddingRight: '10px', border: '1px solid #c8c8c8', borderRadius: '10px'}} type='text' placeholder='' value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></MyInput>

          </Col>

        </Col>

    </Container>






  )
}

export default Header
