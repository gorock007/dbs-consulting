import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import { About } from '../components/About'
import { aboutData, whyData, whyData2 } from '../components/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <Hero />
        <About {...aboutData} />
        <About {...whyData}/>
        <About {...whyData2}/>
        <Services />
        <Footer />

    </div>
  )
}

export default Home;