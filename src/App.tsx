import { BrowserRouter } from "react-router-dom";
import { About, Gallery, Hero, Navbar, Works, Contact, Footer } from "./components";

import './i18n';

function App() {

  return (
    <BrowserRouter>
      <div className='content'>
        <div className='header'>
          <Navbar />
          <Hero />
        </div>
        <About />   
        <Gallery />   
        <Works />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
