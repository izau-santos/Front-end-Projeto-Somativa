import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'  
import Solicitate from './components/pages/Solicitate'
import Favoritos from './components/pages/Favoritos'



function App() {

  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route path='/' element={<Home />} />
              <Route path='/solicitate' element={<Solicitate />} />
              <Route path='/favoritos' element={<Favoritos />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

    </>

  )
}

export default App
