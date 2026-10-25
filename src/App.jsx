import { Routes, Route } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Clubs from "./pages/Clubs"
import SingleClub from "./pages/SingleClub"
import Activities from './pages/Activities'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/singleClub" element={<SingleClub />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </MainLayout>
  )
}

export default App
