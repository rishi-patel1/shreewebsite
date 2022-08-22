import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <Plans/>
      <NotFound/>

    </BrowserRouter>
  )
}

export default App