// css

import '../../../styles/animation.css'

//

import { FC, useState } from 'react'
import { useSpring, animated, useSpringRef } from '@react-spring/web'

//

import { Col, Container, Row } from 'react-bootstrap'

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


  const [open, setOpen] = useState<Boolean>(false)
  const [searchText, setSearchText] = useState('')
  const {searchNews, setSearchNews} = search


  const api = useSpringRef()
  const springs = useSpring({
    ref: api,
    from: {y: -200}
  })

  const openMenu = () => {


    console.log('animation')
    setOpen(open => !open)
    api.start({
      to: {y: springs.y.get() === -200 ? 0 : -200}
    })

  }


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


      <Row className='d-flex align-items-center mt-4 '>

        {/* logo */}


        <Col md={2} sm={3} xs={6} className='d-flex justify-content-center  justify-content-md-start mb-4'><Link to={'/'}><img style={{width: '100px'}} className='logo_menu_animation' src={logo} alt="logo-utv"/></Link></Col>


        {/* menu horizontal */}

        <Col md={6} sm={6} xs={6} className='d-none d-sm-block'>

          <Col className='d-flex justify-content-center flex-md-row flex-column mb-2'>
            {menuHeader.map((item, index) => {
              return <Col key={index} className='d-flex justify-content-center align-items-center mb-md-0 mb-4'><Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', width: '150px', textAlign: 'center'}} to={item.link}><div className='header_menu_animation'>{item.title}</div></Link></Col>
            })}
          </Col>

        </Col>


        <Col md={6} sm={6} xs={6} className='d-block d-sm-none mb-4'>

          <Col clasName='d-flex flex-column justify-content-center align-items-center'>

              <Col style={{fontSize: '26px', textAlign: 'center'}} className='aniamtion_menu_burger' onClick={() => {openMenu()}}>{!open ? '≡' : '×'}</Col>

          </Col>

        </Col>


          <Col md={4} sm={12} xs={12} className='d-flex justify-content-lg-end justify-content-center align-items-center mb-2'>

              <Link to={'/search'}><SearchIcon onClick={() => {searchTextHandler()}} className='d-flex align-items-center header_search_icon'/></Link>
              <MyInput style={{marginLeft: '10px', height: '45px', width: '184px', display: 'flex', justifyContent: 'center', paddingLeft: '10px', paddingRight: '10px', border: '1px solid #c8c8c8', borderRadius: '10px'}} type='text' placeholder='' value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></MyInput>

          </Col>

      </Row>



      <Row style={{overflow: 'hidden'}}>

        <Col className='d-block d-sm-none'>



        {open && <animated.div style={springs}><Col className='d-flex flex-column justify-content-center align-items-center mt-4'>
              {menuHeader.map((item, index) => {
                return <Col key={index} className='d-flex flex-column mb-2'><Link style={{textDecoration: 'none', color: 'black', fontSize: '22px', width: '150px', textAlign: 'center'}} to={item.link}><div className='header_menu_animation'>{item.title}</div></Link></Col>
              })}
            </Col></animated.div>}



        </Col>

      </Row>


    </Container>






  )
}

export default Header
