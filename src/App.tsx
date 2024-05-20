import { FC } from 'react'

//

import { Routes, Route } from 'react-router-dom';

// styles

import './App.css';

//

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// components

import Header from './components/page/Header';
import Main from './components/page/Main';
import Footer from './components/page/Footer';



const App = () => {
  return (
    <div>
      <Container>

        <Header />

          <Routes>

            <Route path='/' element={<Main />}></Route>

          </Routes>


        <Footer />

      </Container>
    </div>
  )
}

export default App
