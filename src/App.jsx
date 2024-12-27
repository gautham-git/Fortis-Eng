import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About'
import Products from './Components/Products'
import ClientPage from './Components/ClientPage'
import ProductGallery from './Components/ProductGallery'
import ContactPage from './Components/Contactpage'
import MapPage from './Components/Mappage'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div> 
      <Navbar />
      <Hero />  
      <About />  
      <Products />
      <ClientPage />
      <ProductGallery />
      <ContactPage />
      <MapPage />
      <Footer />
     </div>
  )
}

export default App