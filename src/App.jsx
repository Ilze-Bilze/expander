import json from '../data.json'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import ContactSection from './components/Contact'
import About from './components/About'
import VideoPlayer from './components/VideoPlayer'
import Testimonials from './components/Testimonials/Testimonials'
import Shop from './components/Shop'

function App() {

  return (
    <>
      <Header />
      {/* Video section */}  
      <VideoPlayer id={json.contact.id} />
      {/* Shop section */}  
      <Shop id={json.shop.id} title={json.shop.title} />
      {/* About section */}            
      <About id={json.about.id} title={json.about.title} image={json.about.image} background={json.about.image} />
      {/* Testimonials section */}  
      <Testimonials id={json.about.id} title={json.about.title} image={json.about.image} /> 
      {/* Contact section */}  
      <ContactSection title={json.contact.title} text={json.contact.text} id={json.contact.id} background={json.contact.image} />
      <Footer />
    </>
  )
}

export default App
