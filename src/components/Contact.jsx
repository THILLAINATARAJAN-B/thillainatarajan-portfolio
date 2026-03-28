import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Briefcase, Rocket, Users, Code2 } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thillainatarajan001@gmail.com',
      link: 'mailto:thillainatarajan001@gmail.com',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9994484358',
      link: 'tel:+919994484358',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      link: null,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/THILLAINATARAJAN-B',
      color: '#333',
      gradient: 'linear-gradient(135deg, #333, #000)'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/thillainatarajan-balamurugan',
      color: '#0077b5',
      gradient: 'linear-gradient(135deg, #0077b5, #005885)'
    }
  ]

  const opportunities = [
    { icon: Briefcase, text: 'Full-time Java Backend roles', color: '#3b82f6' },
    { icon: Code2, text: 'Backend & API projects', color: '#10b981' },
    { icon: Rocket, text: 'Hackathons & challenges', color: '#f59e0b' },
    { icon: Users, text: 'Open-source collaborations', color: '#8b5cf6' }
  ]

  return (
    <section id="contact" className="section section-alt" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '60px 30px'
    }}>
      {/* Header */}
      <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
          padding: '8px 20px',
          borderRadius: '30px',
          marginBottom: '15px',
          border: '2px solid var(--primary-blue)'
        }}>
          <Send size={18} color="var(--primary-blue)" />
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            letterSpacing: '0.5px'
          }}>
            LET'S BUILD SOMETHING TOGETHER
          </span>
        </div>
        <h2 className="section-title" style={{ 
          marginBottom: '5px',
          fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
        }}>
          Get In <span className="section-title-accent">Touch</span>
        </h2>
        <p className="section-subtitle" style={{ 
          marginBottom: '0',
          fontSize: '0.95rem'
        }}>
          Open to Java backend roles, collaborations, and engineering challenges
        </p>
      </div>

      {/* Contact Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '25px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}
      className="contact-grid">
        
        {/* Left Column - Contact Info & Social */}
        <div className="fade-in-up" style={{ 
          animationDelay: '0.1s',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Contact Cards */}
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                transition: 'var(--transition)',
                animationDelay: `${idx * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                background: info.gradient,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: `0 8px 20px ${info.color}30`
              }}>
                <info.icon size={24} color="white" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  marginBottom: '3px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {info.label}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    margin: 0
                  }}>
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="card" style={{ padding: '20px' }}>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Connect on Social
            </h4>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    height: '55px',
                    background: social.gradient,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'var(--transition)',
                    textDecoration: 'none',
                    boxShadow: `0 8px 20px ${social.color}30`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = `0 12px 30px ${social.color}50`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}30`
                  }}
                >
                  <social.icon size={24} color="white" />
                  <span style={{
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: '700'
                  }}>
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Quick Message */}
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="card" style={{ 
            height: '100%',
            padding: '25px',
            background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
            border: '2px solid var(--primary-blue)'
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '900',
              color: 'var(--primary-blue)',
              marginBottom: '15px'
            }}>
              Let's Collaborate! 🚀
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: '0.9rem'
            }}>
              Passionate about Java backend and full-stack development. Ready to contribute from day one with <strong>4 hackathons, 2 internships, and 4+ production projects</strong>.
            </p>

            {/* Opportunities Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginBottom: '20px'
            }}>
              {opportunities.map((opp, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px',
                    background: 'var(--primary-white)',
                    borderRadius: '10px',
                    border: '2px solid var(--border-gray)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = opp.color
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-gray)'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: `${opp.color}15`,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <opp.icon size={18} color={opp.color} />
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    lineHeight: '1.2'
                  }}>
                    {opp.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              marginBottom: '20px',
              padding: '15px',
              background: 'var(--primary-white)',
              borderRadius: '12px',
              border: '2px solid var(--border-gray)'
            }}>
              {[
                { label: 'Projects', value: '4+' },
                { label: 'Hackathons', value: '4' },
                { label: 'Internships', value: '2' }
              ].map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: 'var(--primary-blue)',
                    margin: 0,
                    lineHeight: 1
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                    margin: 0,
                    marginTop: '2px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="mailto:thillainatarajan001@gmail.com"
              className="btn btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                fontSize: '1rem',
                padding: '14px',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <Send size={20} />
              Send Email Now
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          #contact {
            min-height: auto !important;
            padding: 50px 15px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
