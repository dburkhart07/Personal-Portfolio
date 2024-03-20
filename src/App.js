import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Layout from './components/Layout'
import Contact from './components/Contact'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App