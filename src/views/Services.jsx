import React, { useState } from 'react'
import ServiceHero from '../components/ServiceHero'
import Navbar from '../components/Navbar'
import { About } from '../components/About'
import { serviceData1, serviceData2, serviceData3 } from '../components/Data'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Services = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ServiceHero/>
        <About {...serviceData1} />
        <About {...serviceData2} />
        <About {...serviceData3} />
        <Footer/>

    </div>
  )
}

export default Services