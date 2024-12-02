import { useState } from 'react'
import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import WhyAuditmos from '@/components/home/WhyAuditmos'
import Services from '@/components/home/Services'
import Audits from '@/components/home/Audits'
import Resources from '@/components/home/Resources'
import Footer from '@/components/layout/Footer'
import MobileMenu from '@/components/shared/MobileMenu'
import '@/styles/global.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflowY = !isMobileMenuOpen ? 'hidden' : 'auto'
  }

  return (
    <>
      <Header onMenuToggle={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      {isMobileMenuOpen && (
        <div 
          className="overlay_menu" 
          onClick={toggleMobileMenu}
          style={{ display: 'block' }}
        />
      )}
      <main>
        <Hero />
        <Stats />
        <WhyAuditmos />
        <Services />
        <Audits />
        <Resources />
      </main>
      <Footer />
    </>
  )
}

export default App
