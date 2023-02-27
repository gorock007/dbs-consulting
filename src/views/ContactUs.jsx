import React, { useState } from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero'
import Sidebar from '../components/Sidebar'

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <ContactHero />
        <Contact />
        <Footer />
    </div>
  )
}

export default ContactUs