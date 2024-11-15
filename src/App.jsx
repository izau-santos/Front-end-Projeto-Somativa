import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'  
import Solicitate from './components/pages/Solicitate'
import Favoritos from './components/pages/Favoritos'
import DetailFilme from './components/pages/DetailFilme'


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
              <Route path='/detailFilme/:cod_filme' element={<DetailFilme />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

    </>

  )
}

export default App
