import { FC, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

//

import { Routes, Route } from 'react-router-dom';

// styles

import './App.css';

//

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// components

import Header from './components/page/Header/Header';
import Main from './components/page/Main';
import NewsPage from './components/page/NewsPage';
import NewsOpenCard from './components/page/NewsPage/NewsOpenCard';
import ProjectPage from './components/page/ProjectPage/ProjectPage';
import ProjectOpenCard from './components/page/ProjectPage/ProjectOpenCard';


// modals

import ModalNews from './components/modals/ModalNews';


//

import Channel from './components/page/Channel';

//

import Footer from './components/page/Footer/Footer';
import { transform } from 'typescript';

type modalNewsMessageProps = {
  name: string
  phone: string
  file: any
  message: string

}



const App = () => {


  const [modalNewsOpen, setModalNewsOpen] = useState(false)
  const [modalNewsMessage, setModalNewsMessage] = useState<modalNewsMessageProps>({
    name: '',
    phone: '',
    file: '',
    message: '',
  })
  const [findNews, setFindNews] = useState('')


  return (
      <Container fluid>

        <Header find={{findNews, setFindNews}}/>

          <div className='content'>
          <Routes>

            <Route path='/' element={<Main modalOpen={{modalNewsOpen, setModalNewsOpen}}/>}></Route>
            <Route path='/about' element={<Channel />}></Route>
            <Route path='/news' element={<NewsPage/>}></Route>
            <Route path='/news/:id' element={<NewsOpenCard />}></Route>
            <Route path='/project' element={<ProjectPage />}></Route>
            <Route path='/project/:id' element={<ProjectOpenCard />}></Route>

          </Routes>
          </div>

            <Footer />

        {(!modalNewsOpen) ? <></> : <ModalNews modalOpen={{modalNewsOpen, setModalNewsOpen}} modalMessage ={{modalNewsMessage, setModalNewsMessage}}/>}



      </Container>
  )
}

export default App
