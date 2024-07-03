import { FC } from 'react'

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


//

import Channel from './components/page/Channel';

//

import Footer from './components/page/Footer/Footer';



const App = () => {
  return (
    <div>
      <Container fluid>

        <Header />

          <Routes>

            <Route path='/' element={<Main />}></Route>
            <Route path='/about' element={<Channel />}></Route>
            <Route path='/news' element={<NewsPage/>}></Route>
            <Route path='/news/:id' element={<NewsOpenCard />}></Route>

          </Routes>

        <Footer />

      </Container>
    </div>
  )
}

export default App
