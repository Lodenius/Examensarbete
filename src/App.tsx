import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './pages/Start'
import Prices from './pages/Prices'
import About from './pages/About'
import Booking from './pages/Booking'
import Calendar from './pages/Calendar'
import Events from './pages/Events'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/about' element={<About />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
