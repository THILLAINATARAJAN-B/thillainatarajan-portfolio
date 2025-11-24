import React, { useState, useEffect } from 'react'
import { Menu, X, Download, Sparkles } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Highlight active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'certifications', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled 
        ? 'rgba(255, 255, 255, 0.98)' 
        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
      backdropFilter: 'blur(20px)',
      boxShadow: scrolled ? '0 4px 24px rgba(37, 99, 235, 0.08)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(37, 99, 235, 0.1)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '16px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: '42px',
            height: '42px',
            background: 'linear-gradient(135deg, var(--primary-blue), var(--sky-blue))',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            fontWeight: '900',
            color: 'white',
            letterSpacing: '-1px',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)'
          }}>
            TB
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1.2'
          }}
          className="logo-text">
            <span style={{
              fontSize: '0.95rem',
              fontWeight: '800',
              color: 'var(--text-primary)',
              letterSpacing: '-0.5px'
            }}>
              Thillainatarajan B
            </span>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: '600',
              color: 'var(--text-muted)',
              letterSpacing: '0.3px'
            }}>
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul style={{
          display: 'flex',
          gap: '8px',
          listStyle: 'none',
          alignItems: 'center',
          margin: 0,
          padding: 0
        }}
        className="desktop-menu">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    color: isActive ? 'var(--primary-blue)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontWeight: isActive ? '700' : '600',
                    transition: 'all 0.3s ease',
                    fontSize: '0.88rem',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    display: 'block',
                    position: 'relative',
                    background: isActive ? 'linear-gradient(135deg, #dbeafe, #bfdbfe)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.color = 'var(--primary-blue)'
                      e.target.style.background = 'var(--light-gray)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.color = 'var(--text-secondary)'
                      e.target.style.background = 'transparent'
                    }
                  }}
                >
                  {item.name}
                </a>
              </li>
            )
          })}
          <li style={{ marginLeft: '8px' }}>
            <a 
              href="/resume.pdf" 
              download="Thillainatarajan_B_Resume.pdf"
              className="btn btn-primary" 
              style={{ 
                padding: '10px 20px', 
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
              }}
            >
              <Download size={16} />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: mobileMenuOpen ? 'var(--primary-blue)' : 'var(--light-gray)',
            border: 'none',
            color: mobileMenuOpen ? 'white' : 'var(--text-primary)',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            boxShadow: mobileMenuOpen ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none'
          }}
          className="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        maxHeight: mobileMenuOpen ? '600px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out',
        background: 'var(--primary-white)',
        borderTop: mobileMenuOpen ? '1px solid var(--border-gray)' : 'none',
        boxShadow: mobileMenuOpen ? '0 10px 30px rgba(0, 0, 0, 0.12)' : 'none'
      }}
      className="mobile-menu">
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          listStyle: 'none',
          margin: 0,
          padding: '20px'
        }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    color: isActive ? 'var(--primary-blue)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontWeight: isActive ? '700' : '600',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    background: isActive ? 'linear-gradient(135deg, #dbeafe, #bfdbfe)' : 'transparent',
                    fontSize: '0.95rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.background = 'var(--light-gray)'
                      e.target.style.color = 'var(--primary-blue)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.background = 'transparent'
                      e.target.style.color = 'var(--text-secondary)'
                    }
                  }}
                >
                  {isActive && (
                    <span style={{
                      width: '4px',
                      height: '20px',
                      background: 'var(--primary-blue)',
                      borderRadius: '2px',
                      marginRight: '12px'
                    }} />
                  )}
                  {item.name}
                </a>
              </li>
            )
          })}
          <li style={{ marginTop: '8px' }}>
            <a 
              href="/resume.pdf" 
              download="Thillainatarajan_B_Resume.pdf"
              className="btn btn-primary" 
              style={{ 
                width: '100%', 
                justifyContent: 'center',
                padding: '14px',
                fontSize: '0.95rem',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
              }}
            >
              <Download size={18} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
          .logo-text {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
