import { BrowserRouter } from "react-router-dom";
import { About, Gallery, Hero, Navbar, Works, Footer } from "./components";

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
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
