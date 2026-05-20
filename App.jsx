import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Program from './pages/Program'
import Gallery from './pages/Gallery'
import Reservation from './pages/Reservation'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/programme' element={<Program />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App