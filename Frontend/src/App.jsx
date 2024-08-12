import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import Whychoose from './components/Whychoose/Whychoose'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import { useState ,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {
   const[showPopup ,setShowPopup] = useState(false)
   const HandlePopup = () =>{
    setShowPopup(true)
   }

   useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay:100,
    })
    AOS.refresh()
   },[])

  return (
    <div  className='overflow-x-hidden'>
      <Navbar HandlePopup={HandlePopup}/>
      <Hero />
      <Banner />
      <Whychoose />
      <About HandlePopup={HandlePopup}/>
      <Banner />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}

export default App