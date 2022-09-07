import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
// import Gallery from './pages/gallery/Gallery'
import Products from './pages/products/Products'
import Plans from './pages/plans/Plans'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OurClients from './pages/clients/OurClients'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='ourClients' element={<OurClients/>}/>
        {/* <Route path='gallery' element={<Gallery/>}/> */}
        <Route path='plans' element={<Plans/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
      <Footer/>

    </BrowserRouter>
  )
}

export default App