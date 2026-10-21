import { Routes, Route } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Clubs from "./pages/Clubs"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
      </Routes>
    </MainLayout>
  )
}

export default App
