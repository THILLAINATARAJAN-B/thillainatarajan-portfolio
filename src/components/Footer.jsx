import React from 'react'
import { Heart, Github, Linkedin, Mail, ExternalLink, Code, Sparkles } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { 
      icon: Github, 
      link: 'https://github.com/THILLAINATARAJAN-B',
      label: 'GitHub',
      color: '#333'
    },
    { 
      icon: Linkedin, 
      link: 'https://linkedin.com/in/thillainatarajan-balamurugan',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    { 
      icon: Mail, 
      link: 'mailto:thillainatarajan001@gmail.com',
      label: 'Email',
      color: '#ea4335'
    }
  ]

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      padding: '50px 30px 25px',
      marginTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          marginBottom: '40px'
        }}
        className="footer-grid">
          
          {/* Brand & Description */}
          <div style={{ gridColumn: 'span 1' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '900',
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              TB <Sparkles size={24} color="#60a5fa" />
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.7',
              fontSize: '0.9rem',
              marginBottom: '20px'
            }}>
              AI/ML Engineer & Full-Stack Developer building intelligent systems with measurable impact. 
              <strong style={{ color: 'white' }}> 6 hackathons • 3 wins • 10+ projects</strong>
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(16, 185, 129, 0.15)',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#10b981',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{
                color: '#10b981',
                fontSize: '0.8rem',
                fontWeight: '700'
              }}>
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '800',
              marginBottom: '18px',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px'
            }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      transition: 'var(--transition)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontWeight: '600'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#60a5fa'
                      e.target.style.transform = 'translateX(3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.7)'
                      e.target.style.transform = 'translateX(0)'
                    }}
                  >
                    <span style={{ fontSize: '8px' }}>▸</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '800',
              marginBottom: '18px',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Let's Connect
            </h4>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Open to full-time roles, internships, and collaborations in AI/ML and Data Science.
            </p>
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '15px'
            }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                  title={social.label}
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.borderColor = social.color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <a
              href="mailto:thillainatarajan001@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#60a5fa'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255,255,255,0.7)'
              }}
            >
              <Mail size={14} />
              thillainatarajan001@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          marginBottom: '25px'
        }} />

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}
        className="footer-bottom">
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0
          }}>
            © 2025 Thillainatarajan B. Crafted with 
            <Heart size={14} color="#ef4444" fill="#ef4444" style={{ animation: 'heartbeat 1.5s infinite' }} /> 
            using <Code size={14} /> React & Vite
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <a
              href="#hero"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.85rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'var(--transition)',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(0.9); }
          20%, 40% { transform: scale(1.1); }
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
