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
import Contacts from './components/page/Contacts';
import SearchNews from './components/page/SearchNews';


// modals

import ModalNews from './components/modals/ModalNews';
import ModalSubmit from './components/modals/ModalSubmit';


//

import Channel from './components/page/Channel';

//

import Footer from './components/page/Footer/Footer';
import { transform } from 'typescript';


type modalNewsMessageProps = {
  name: string
  phone: string
  email: string
  message: string

}



const App = () => {


  const [modalNewsOpen, setModalNewsOpen] = useState(false)
  const [modalSubmitAgree, setModalSubmitAgree] = useState(false)
  const [modalSubmitDisagree, setModalSubmitDisagree] = useState(false)




  const [modalNewsMessage, setModalNewsMessage] = useState<modalNewsMessageProps>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })



  const [searchNews, setSearchNews] = useState('')



  return (
      <Container fluid>

        <Header search={{searchNews, setSearchNews}}/>

          <div className='content'>
          <Routes>

            <Route path='/' element={<Main modalOpen={{modalNewsOpen, setModalNewsOpen}} modalAgree={{modalSubmitAgree, setModalSubmitAgree}} modalDisAgree={{modalSubmitDisagree, setModalSubmitDisagree}}/>}></Route>
            <Route path='/about' element={<Channel />}></Route>
            <Route path='/news' element={<NewsPage/>}></Route>
            <Route path='/news/:id' element={<NewsOpenCard />}></Route>
            <Route path='/project' element={<ProjectPage />}></Route>
            <Route path='/project/:id' element={<ProjectOpenCard />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
            <Route path='/search' element={<SearchNews search={{searchNews, setSearchNews}}/>}></Route>

          </Routes>
          </div>

            <Footer />

        {(!modalNewsOpen) ? <></> : <ModalNews modalOpen={{modalNewsOpen, setModalNewsOpen}} modalAgree={{modalSubmitAgree, setModalSubmitAgree}} modalDisAgree={{modalSubmitDisagree, setModalSubmitDisagree}} modalMessage ={{modalNewsMessage, setModalNewsMessage}}/>}
        {(!modalSubmitAgree) ? <></> : <ModalSubmit title='Сообщение отправлено' buttonTitle='Закрыть' fn={() => {setModalSubmitAgree(false)}}></ModalSubmit>}
        {(!modalSubmitDisagree) ? <></> : <ModalSubmit title='Заполните все поля' buttonTitle='Продолжить' fn={() => {setModalSubmitDisagree(false)}}></ModalSubmit>}


      </Container>
  )
}

export default App
