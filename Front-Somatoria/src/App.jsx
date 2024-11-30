import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'  
import Solicitate from './components/pages/Solicitate'
import Favoritos from './components/pages/Favoritos'
import DetailFilme from './components/pages/DetailFilme'
import UpdateFilmes from './components/pages/UpdateFilme'
import DeleteFilme from './components/pages/DeleteFilme'


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
              <Route path='/detailfilme/:cod_filme' element={<DetailFilme />} />
              <Route path="/updatefilme/:cod_filme" element={<UpdateFilmes/>}/>
              <Route path="/deletefilme/:cod_filme" element={<DeleteFilme />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

    </>

  )
}

export default App
